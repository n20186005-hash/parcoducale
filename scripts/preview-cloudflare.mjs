import { spawnSync, execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';

export function parsePreviewArgs(args) {
  if (args.some(arg => arg !== '--prepare-only') || args.length > 1) {
    throw new Error('Unknown Preview argument. Use --prepare-only for a local build without publication.');
  }
  return { prepareOnly: args.includes('--prepare-only') };
}

export function resolvePreviewBranch(env, localBranch) {
  const branch = (env.WORKERS_CI_BRANCH ?? env.CLOUDFLARE_GIT_BRANCH ?? localBranch).trim().replace(/^refs\/heads\//, '');
  if (!branch || branch === 'main' || branch === 'HEAD') {
    throw new Error('Refusing Preview publication without a non-production branch.');
  }
  return branch;
}
export function previewNameForBranch(branch) {
  const slug = branch.toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40) || 'branch';
  return `${slug}-${createHash('sha256').update(branch).digest('hex').slice(0, 8)}`;
}
export function validatePreviewConfig(config) {
  const allowed = new Set(['$schema', 'name', 'compatibility_date', 'assets', 'previews']);
  if (!config || Object.keys(config).some(key => !allowed.has(key))) {
    throw new Error('Preview configuration contains unexpected production or resource settings.');
  }
  if (config.name !== 'parcoducale' || config.assets?.directory !== './out' || config.assets?.not_found_handling !== '404-page') {
    throw new Error('Unexpected Preview target or assets configuration.');
  }
  if (Object.keys(config.assets).some(key => !['directory', 'not_found_handling'].includes(key)) || !config.previews || Array.isArray(config.previews) || Object.keys(config.previews).length) {
    throw new Error('The static Preview must not configure bindings, services or resources.');
  }
}
function run(command, args, env = process.env) {
  const result = spawnSync(command, args, { stdio: 'inherit', env });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
export function main() {
  const { prepareOnly } = parsePreviewArgs(process.argv.slice(2));
  const localBranch = execFileSync('git', ['branch', '--show-current'], { encoding: 'utf8' }).trim();
  const branch = prepareOnly ? (process.env.WORKERS_CI_BRANCH || localBranch || 'local-build') : resolvePreviewBranch(process.env, localBranch);
  for (const file of ['wrangler.toml', 'wrangler.json', 'wrangler.jsonc']) {
    if (existsSync(file)) throw new Error(`Unexpected default ${file}; review the deployment architecture before continuing.`);
  }
  validatePreviewConfig(JSON.parse(readFileSync('wrangler.preview.jsonc', 'utf8')));
  // Production keeps its existing build/deploy commands and automatic adapter.
  run(process.execPath, ['node_modules/next/dist/bin/next', 'build'], {
    ...process.env,
    PARCODUCALE_STATIC_PREVIEW: '1',
  });
  const articles = JSON.parse(readFileSync('src/data/nearby-guides.json', 'utf8'));
  for (const [locale, guides] of Object.entries(articles)) {
    for (const slug of Object.keys(guides)) {
      if (!existsSync(resolve('out', locale, 'nearby', `${slug}.html`))) throw new Error(`Missing exported guide: ${locale}/${slug}`);
    }
  }
  for (const file of ['pilotta.jpg', 'toscanini.jpg', 'piazza-duomo.jpg']) {
    if (!existsSync(resolve('out/nearby', file))) throw new Error(`Missing exported photo: ${file}`);
  }
  // These files exist only in generated Preview assets, never in public/.
  writeFileSync('out/_headers', '/*\n  X-Robots-Tag: noindex, nofollow\n');
  writeFileSync('out/_redirects', '/ /it 302\n');
  console.log(`Prepared isolated static Preview for ${branch}; production configuration unchanged.`);
  if (!prepareOnly) run('npx', ['--yes', 'wrangler@4.159.0', 'preview', '--config', 'wrangler.preview.jsonc', '--name', previewNameForBranch(branch), '--ignore-base-config']);
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) main();
