# mileswells.com

Online business card: a single static resume page. SvelteKit (adapter-static, prerendered), Svelte 5, Tailwind 4, TypeScript, pnpm.

## Commands

- `pnpm dev` — dev server
- `pnpm check` — svelte-check (types)
- `pnpm lint` — `prettier --check . && eslint .` (both must pass)
- `pnpm format` — prettier --write
- `pnpm build` — static build into `build/`

## Conventions

- Svelte 5 runes only (`$props`, `$state`, snippets, `onclick=`); no legacy syntax (`export let`, `<slot>`, `on:`, `class:`).
- Run Validation and fix any issues
- Site content (resume text, contact details, titles, dates, meta description) is hand-written and hardcoded; job data lives in `src/lib/jobs.ts`. Never change or reword content unless specifically asked, even while refactoring or restyling.
- Theme tokens (space/cobalt/azure/cyan/ice/amber) and fonts are defined in `src/routes/layout.css`; use them instead of raw hex. Dark theme only, no animation.
- Icons and manifest are static files in `static/`, linked from `src/app.html`.
- Body text must stay WCAG AA contrast on the dark background.

## Validation

- pnpm check
- pnpm lint

## Workflow

- Work on `main`; no feature branches or worktrees.
