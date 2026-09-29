# Resume Site Design

## Goal
Turn `mileswells.com` (SvelteKit, adapter-static, Tailwind 4, Svelte 5 runes) into a beautiful online business card built from `miles-wells-resume.md`. First pass, single static page.

## Theme
Dark cosmic, inspired by processed space-telescope imagery (JWST/Hubble): deep navy ground, cobalt/azure/cyan glow, sparing warm amber accent.

Tokens (Tailwind 4 `@theme` in `src/routes/layout.css`; starting values, tuned by eye):
- Ground: `space-950 #040816`, `space-900 #0a1330`
- Blues: cobalt `#2f5bea`, azure `#4f9dff`, cyan `#5ce1ff`, ice `#cfe8ff` (text)
- Accent: amber `#ffb066` (dates, hover)
- Type: clean sans body + display face for the name, self-hosted (no runtime requests)
- Body text meets WCAG AA contrast on the dark ground; verified by computing contrast ratios.

## Content
`src/lib/resume.ts` holds typed data (contact, summary, jobs with bullets, skill groups, education). Text is verbatim from the markdown. The markdown file stays as the canonical copy; generating data from it is out of scope.

## Components (Svelte 5 runes, snippets, keyed `{#each}`)
- `Hero.svelte`: name, title, location, contact links, summary as lede
- `Experience.svelte` / `Job.svelte`: vertical timeline, glowing node per role, title/company/dates/bullets
- `Skills.svelte`: grouped chips
- `Education.svelte`
- `Starfield.svelte`: decorative background; CSS-only layered radial gradients (nebula) plus sparse stars; slow drift disabled under `prefers-reduced-motion`

`+page.svelte` composes sections and sets title, description and Open Graph tags via `<svelte:head>`. Contact links use `mailto:` / `tel:`. Page is prerendered; no client JS beyond hydration.

## Responsive / a11y
Works at ~400px width with at least 16px side gutters; semantic landmarks and heading order; visible focus styles; decorative background is `aria-hidden`.

## Verification
`pnpm check`, `pnpm lint`, `pnpm build`; Svelte MCP autofixer on every component; dev-server screenshots at desktop and phone widths.

## Out of scope
Light mode, PDF download, blog, animation beyond the background drift.
