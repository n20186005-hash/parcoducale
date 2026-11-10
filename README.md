This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Cloudflare branch Previews

Production keeps the existing `npm run build` and `npx wrangler deploy` flow.
There is intentionally no default Wrangler configuration in this repository,
so Cloudflare can continue its automatic Next.js/OpenNext configuration.
Do not rename `wrangler.preview.jsonc` to a default Wrangler filename.

For the non-production branch deployment command, use:

    npm run preview:cloudflare

This creates a static export for content and navigation review and passes the
explicit preview-only configuration to Wrangler. It refuses production or
unknown branches, configures no application resource bindings, and adds
`X-Robots-Tag: noindex, nofollow` only to the generated Preview assets.
New Previews ignore the dashboard Base configuration; this does not promise to
remove settings or secrets from an already-existing same-named Preview.

To build the Preview assets locally without publishing:

    npm run preview:cloudflare -- --prepare-only

Unknown arguments, including `--dry-run`, are rejected before build or publish.
The normal production build remains standalone unless the script explicitly
sets `PARCODUCALE_STATIC_PREVIEW=1` for its child build process.

This static Preview does not exercise the production OpenNext/SSR runtime.
Production acceptance must separately verify the exact deployed commit,
new pages, assets, metadata and redirects on the production domain.

Preview safety checks:

    node --test scripts/preview-cloudflare.test.mjs
