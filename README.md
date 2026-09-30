# mileswells.com

Online business card: a single static resume page built with SvelteKit (adapter-static, prerendered), Svelte 5, Tailwind 4, and TypeScript.

## Development

Requires [pnpm](https://pnpm.io).

```sh
pnpm install
pnpm dev       # dev server
pnpm check     # type check
pnpm lint      # prettier + eslint
pnpm format    # apply prettier
pnpm build     # static build into build/
pnpm preview   # serve the production build
```

## Deployment

The `build/` directory is served as static assets via Cloudflare (see `wrangler.jsonc`).
