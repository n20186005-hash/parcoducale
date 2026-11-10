import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parsePreviewArgs, resolvePreviewBranch, previewNameForBranch, validatePreviewConfig } from './preview-cloudflare.mjs';
const config = JSON.parse(readFileSync(new URL('../wrangler.preview.jsonc', import.meta.url), 'utf8'));
test('Workers Builds branch metadata overrides a detached checkout', () => {
  assert.equal(resolvePreviewBranch({WORKERS_CI_BRANCH:'feat/nearby-attraction-guides'}, ''), 'feat/nearby-attraction-guides');
});
test('production and missing branch fail closed', () => {
  for (const b of ['main','refs/heads/main','','HEAD']) assert.throws(()=>resolvePreviewBranch({WORKERS_CI_BRANCH:b}, 'feature'));
});
test('local feature branch is supported and names are safe and stable', () => {
  assert.equal(resolvePreviewBranch({}, 'feat/example'), 'feat/example');
  const name=previewNameForBranch('Feat/example');
  assert.match(name,/^[a-z0-9-]{1,49}$/);
  assert.equal(name,previewNameForBranch('Feat/example'));
  assert.notEqual(name,previewNameForBranch('feat/example'));
});
test('current static configuration passes without resource bindings', () => validatePreviewConfig(config));
test('production routes, workers, bindings and preview resources are rejected', () => {
  for(const key of ['main','routes','services','workers_dev','vars','r2_buckets','kv_namespaces','d1_databases']) assert.throws(()=>validatePreviewConfig({...config,[key]:[]}));
  assert.throws(()=>validatePreviewConfig({...config,previews:{vars:{secret:'test'}}}));
});
test('wrong Worker, asset target and asset binding are rejected', () => {
  assert.throws(()=>validatePreviewConfig({...config,name:'other-worker'}));
  assert.throws(()=>validatePreviewConfig({...config,assets:{...config.assets,directory:'./public'}}));
  assert.throws(()=>validatePreviewConfig({...config,assets:{...config.assets,binding:'ASSETS'}}));
});

test('unknown and misleading dry-run arguments fail before side effects', () => {
  assert.deepEqual(parsePreviewArgs([]), {prepareOnly:false});
  assert.deepEqual(parsePreviewArgs(['--prepare-only']), {prepareOnly:true});
  for (const args of [['--dry-run'], ['--help'], ['--prepare-only','--dry-run'], ['--prepare-only','--prepare-only']]) assert.throws(()=>parsePreviewArgs(args));
});
