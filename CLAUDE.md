# mileswells.com

Online business card: a single static page rendered from the resume data. SvelteKit (adapter-static, prerendered), Svelte 5, Tailwind 4, TypeScript, pnpm.

## Commands

- `pnpm dev` — dev server
- `pnpm check` — svelte-check (types)
- `pnpm lint` — `prettier --check . && eslint .` (both must pass)
- `pnpm format` — prettier --write
- `pnpm build` — static build into `build/`

## Conventions

- Svelte 5 runes only (`$props`, `$state`, snippets, `onclick=`); no legacy syntax (`export let`, `<slot>`, `on:`, `class:`).
- Run the Svelte MCP autofixer on every `.svelte` file you write or edit.
- Resume content lives in `src/lib/resume.ts`, the single source of truth; don't reword it unless asked.
- Theme tokens (space/cobalt/azure/cyan/ice/amber) and fonts are defined in `src/routes/layout.css`; use them instead of raw hex. Dark theme only, no animation.
- Icons and manifest are static files in `static/`, linked from `src/app.html`.
- Body text must stay WCAG AA contrast on the dark background.

## Workflow

- Commit directly on `main`; no feature branches or worktrees.
- Never push unless asked.
