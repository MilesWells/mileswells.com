# Resume Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Render `miles-wells-resume.md` as a dark, space-telescope-blue single-page site.

**Architecture:** Resume content lives in a typed module (`src/lib/resume.ts`). Small Svelte 5 components (runes, snippets, keyed each) render it. Theme is Tailwind 4 `@theme` tokens in `layout.css`. Background is a CSS-only `Starfield`. Everything prerenders via adapter-static.

**Tech Stack:** SvelteKit 2, Svelte 5, Tailwind 4, TypeScript, `@fontsource-variable/*` for self-hosted fonts, pnpm.

**Spec:** `docs/superpowers/specs/2026-09-29-resume-site-design.md`

## Global Constraints

- Svelte 5 runes mode only: `$props`, `{#snippet}`/`{@render}`, `onclick=`, keyed `{#each}`; no `export let`, `<slot>`, `on:` or `class:` directives.
- Text is verbatim from `miles-wells-resume.md`; the markdown file stays in place.
- Dark theme only. Tokens: `space-950 #040816`, `space-900 #0a1330`, cobalt `#2f5bea`, azure `#4f9dff`, cyan `#5ce1ff`, ice `#cfe8ff`, amber `#ffb066`.
- Fonts self-hosted; no runtime requests to third parties.
- Body text meets WCAG AA contrast on the dark ground.
- Works at ~400px width with at least 16px side gutters; no horizontal page scroll.
- Semantic landmarks, correct heading order, visible focus styles; decorative background is `aria-hidden`.
- Slow background drift is disabled under `prefers-reduced-motion`.
- Contact links use `mailto:` / `tel:`.
- Every `.svelte` file is validated with the Svelte MCP `svelte-autofixer` until it reports no issues.
- Commit messages end with `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`.

## Review Focus

- Long unbroken strings (email, URLs) at 400px width must wrap or shrink, not force horizontal scroll (checked at 390px in Task 7).
- With `prefers-reduced-motion: reduce`, nothing animates (Task 1 CSS; checked in Task 7).
- Keyboard-only use: every link shows a visible focus ring and tab order follows reading order (checked in Task 7).
- Tab titles/link previews: `<title>`, description and Open Graph tags exist in prerendered HTML (checked in Task 6 via build output grep).
- Screen readers: the timeline is a real ordered list and headings go h1, then h2 sections, then h3 jobs (checked in Task 4 and Task 7).

---

### Task 1: Theme, fonts, and app shell

**Files:**
- Modify: `package.json` (deps via pnpm)
- Modify: `src/routes/layout.css`
- Create: `src/lib/components/Starfield.svelte`
- Modify: `src/routes/+layout.svelte`

**Interfaces:**
- Produces: Tailwind color utilities `bg-space-950`, `bg-space-900`, `text-ice`, `text-azure`, `text-cyan`, `text-amber`, `bg-cobalt`; font utilities `font-sans` (Inter Variable) and `font-display` (Space Grotesk Variable); `<Starfield />` (no props); a `.focus-ring`-free global `:focus-visible` style.

- [ ] **Step 1: Install fonts**

Run: `pnpm add @fontsource-variable/inter @fontsource-variable/space-grotesk`
Expected: both added to `dependencies`.

- [ ] **Step 2: Write theme CSS**

Replace `src/routes/layout.css`:

```css
@import 'tailwindcss';
@import '@fontsource-variable/inter';
@import '@fontsource-variable/space-grotesk';

@theme {
	--color-space-950: #040816;
	--color-space-900: #0a1330;
	--color-cobalt: #2f5bea;
	--color-azure: #4f9dff;
	--color-cyan: #5ce1ff;
	--color-ice: #cfe8ff;
	--color-amber: #ffb066;
	--font-sans: 'Inter Variable', ui-sans-serif, system-ui, sans-serif;
	--font-display: 'Space Grotesk Variable', 'Inter Variable', ui-sans-serif, sans-serif;
}

@layer base {
	html {
		background-color: var(--color-space-950);
		color: var(--color-ice);
		color-scheme: dark;
	}
	body {
		font-family: var(--font-sans);
		background-color: var(--color-space-950);
		-webkit-font-smoothing: antialiased;
	}
	a {
		text-underline-offset: 3px;
	}
	:focus-visible {
		outline: 2px solid var(--color-cyan);
		outline-offset: 3px;
		border-radius: 4px;
	}
}
```

- [ ] **Step 3: Write Starfield**

Create `src/lib/components/Starfield.svelte`:

```svelte
<script lang="ts">
	// Deterministic PRNG so server and client render identical stars.
	function mulberry32(seed: number) {
		return () => {
			seed |= 0;
			seed = (seed + 0x6d2b79f5) | 0;
			let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
			t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
			return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
		};
	}

	function stars(count: number, seed: number, color: string) {
		const rand = mulberry32(seed);
		return Array.from(
			{ length: count },
			() => `${(rand() * 100).toFixed(2)}vw ${(rand() * 200).toFixed(2)}vh 0 ${color}`
		).join(',');
	}

	const near = stars(40, 7, 'rgb(207 232 255 / 0.9)');
	const far = stars(90, 21, 'rgb(207 232 255 / 0.45)');
</script>

<div class="nebula" aria-hidden="true"></div>
<div class="stars far" style:--shadow={far} aria-hidden="true"></div>
<div class="stars near" style:--shadow={near} aria-hidden="true"></div>

<style>
	.nebula,
	.stars {
		position: fixed;
		inset: 0;
		z-index: -1;
		pointer-events: none;
	}
	.nebula {
		background:
			radial-gradient(60rem 40rem at 15% 10%, rgb(47 91 234 / 0.35), transparent 60%),
			radial-gradient(50rem 36rem at 85% 30%, rgb(92 225 255 / 0.16), transparent 60%),
			radial-gradient(45rem 30rem at 50% 95%, rgb(79 157 255 / 0.22), transparent 65%),
			radial-gradient(30rem 20rem at 92% 92%, rgb(255 176 102 / 0.08), transparent 70%),
			linear-gradient(180deg, var(--color-space-950), var(--color-space-900) 60%, var(--color-space-950));
	}
	.stars::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 1px;
		height: 1px;
		box-shadow: var(--shadow);
	}
	.stars.near::after {
		width: 2px;
		height: 2px;
		border-radius: 50%;
	}
	@media (prefers-reduced-motion: no-preference) {
		.stars.far {
			animation: drift 240s linear infinite;
		}
		.stars.near {
			animation: drift 140s linear infinite;
		}
	}
	@keyframes drift {
		to {
			transform: translateY(-20vh);
		}
	}
</style>
```

- [ ] **Step 4: Mount in layout**

Replace `src/routes/+layout.svelte`:

```svelte
<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Starfield from '$lib/components/Starfield.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Starfield />
{@render children()}
```

- [ ] **Step 5: Validate**

Run svelte-autofixer (MCP) on both `.svelte` files with `desired_svelte_version: 5`, `filename` set. Fix until clean. Then `pnpm check`. Expected: 0 errors.

- [ ] **Step 6: Commit**

```bash
git add package.json pnpm-lock.yaml src
git commit -m "feat: add cosmic theme tokens, fonts, and starfield background

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 2: Resume data module

**Files:**
- Create: `src/lib/resume.ts`

**Interfaces:**
- Produces:
  - `type ContactLink = { label: string; text: string; href: string }`
  - `type Job = { title: string; company: string; location?: string; dates: string; bullets: string[] }`
  - `type SkillGroup = { name: string; items: string[] }`
  - `export const resume: { name: string; location: string; contacts: ContactLink[]; summary: string; jobs: Job[]; skills: SkillGroup[]; education: { degree: string; school: string; year: string } }`

- [ ] **Step 1: Write the module**

```ts
export type ContactLink = { label: string; text: string; href: string };
export type Job = {
	title: string;
	company: string;
	location?: string;
	dates: string;
	bullets: string[];
};
export type SkillGroup = { name: string; items: string[] };

export const resume = {
	name: 'Miles Wells',
	location: 'Raleigh-Durham, NC',
	contacts: [
		{ label: 'Email', text: 'milescwells@pm.me', href: 'mailto:milescwells@pm.me' },
		{ label: 'Phone', text: '919-272-3020', href: 'tel:+19192723020' },
		{ label: 'Website', text: 'mileswells.com', href: 'https://mileswells.com' },
		{
			label: 'LinkedIn',
			text: 'linkedin.com/in/mileswells',
			href: 'https://linkedin.com/in/mileswells'
		}
	] satisfies ContactLink[],
	summary:
		'Staff Software Engineer with 10 years of full-stack experience, specializing in UI architecture and the integration layer between frontends and backend services. Spent seven years as the sole UI engineer at a robotics software company, owning front-end architecture, testing standards, performance, and UX partnership. TypeScript-first, with a rigorous approach to testing and a pragmatic approach to AI-assisted development.',
	jobs: [
		{
			title: 'Staff Software Engineer',
			company: 'SVT Robotics',
			location: 'Remote, Norfolk, VA',
			dates: 'Jul 2019 – Sep 2026',
			bullets: [
				'Sole UI engineer for the company; owned end-to-end front-end architecture across up to 3 production applications built with TypeScript and Next.js',
				'Partnered directly with the product designer as the primary technical voice on UX decisions, translating design intent into performant, production-ready interfaces',
				"Established testing standards for UI projects (role-based visual regression, role-based interaction testing, E2E coverage, and schema-based validation of external service integrations), cutting test effort from days to the roughly one hour it takes to run the full automated suite",
				'Isolated E2E tests to eliminate flaky failures and the reruns they caused',
				'Added Largest Contentful Paint and Cumulative Layout Shift testing to critical user paths, and used the results to bring LCP under 2.5 seconds and CLS under 0.1',
				"Built AI tooling that lets anyone at the company with GitHub access create proof-of-concept features directly inside our applications using real data, with each one going through the normal dev review process. This shortened the path from idea to customers' hands and saved developer time"
			]
		},
		{
			title: 'Frontend Developer',
			company: 'Validic',
			dates: 'Mar 2018 – Mar 2019',
			bullets: [
				'Built a professional services product for remote monitoring of diabetes patients using React and Redux',
				'Worked on the Impact team on a remote patient monitoring platform using React, TypeScript, and GraphQL, with a Node middleware layer handling SSO via SAML and OIDC'
			]
		},
		{
			title: 'Software Engineer',
			company: 'Dude Solutions',
			dates: 'Jun 2016 – Mar 2018',
			bullets: [
				'Designed and implemented features for a work order management platform, building RESTful APIs in .NET with an Entity Framework data layer',
				'Led adoption of new technology for the Maintenance Manager product, including Node services and Socket.IO real-time alerts',
				'Built an eventing system for preventative maintenance scheduling using Quartz.NET'
			]
		}
	] satisfies Job[],
	skills: [
		{
			name: 'Languages & Frameworks',
			items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', '.NET / C#']
		},
		{
			name: 'Testing',
			items: ['Chromatic', 'Storybook', 'Playwright', 'Zod', 'visual regression', 'E2E']
		},
		{
			name: 'Data',
			items: ['Elasticsearch', 'PostgreSQL', 'RabbitMQ', 'WebSockets', 'REST APIs']
		},
		{ name: 'Auth', items: ['OAuth', 'OIDC'] }
	] satisfies SkillGroup[],
	education: {
		degree: 'B.S., Computer Science',
		school: 'North Carolina State University',
		year: '2016'
	}
};
```

- [ ] **Step 2: Verify against source**

Run: `pnpm check`, then open the markdown and this file side by side and confirm every bullet matches word for word. Expected: 0 errors, no text differences.

- [ ] **Step 3: Commit**

```bash
git add src/lib/resume.ts
git commit -m "feat: add typed resume data

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 3: Hero

**Files:**
- Create: `src/lib/components/Hero.svelte`

**Interfaces:**
- Consumes: `resume.name`, `resume.location`, `resume.contacts`, `resume.summary`, `resume.jobs[0].title` from Task 2.
- Produces: `<Hero />` (no props). Renders the page's only `<h1>` inside `<header>`.

- [ ] **Step 1: Write the component**

```svelte
<script lang="ts">
	import { resume } from '$lib/resume';
</script>

<header class="mx-auto max-w-4xl px-4 pt-20 pb-12 sm:px-6 sm:pt-32">
	<p class="text-amber text-sm font-medium tracking-[0.2em] uppercase">
		{resume.jobs[0].title} · {resume.location}
	</p>
	<h1
		class="font-display mt-4 bg-linear-to-r from-white via-ice to-cyan bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
	>
		{resume.name}
	</h1>
	<p class="mt-8 max-w-2xl text-lg leading-relaxed text-ice/90">{resume.summary}</p>
	<ul class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
		{#each resume.contacts as contact (contact.label)}
			<li class="min-w-0">
				<a
					href={contact.href}
					class="text-azure hover:text-cyan break-all underline decoration-azure/40 hover:decoration-cyan"
					aria-label="{contact.label}: {contact.text}"
				>
					{contact.text}
				</a>
			</li>
		{/each}
	</ul>
</header>
```

- [ ] **Step 2: Validate**

Run svelte-autofixer on the file until clean, then `pnpm check`. Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/components/Hero.svelte
git commit -m "feat: add hero section

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 4: Experience timeline

**Files:**
- Create: `src/lib/components/Job.svelte`
- Create: `src/lib/components/Experience.svelte`

**Interfaces:**
- Consumes: `type Job`, `resume.jobs` from Task 2.
- Produces: `<Job job={Job} />` renders an `<li>`; `<Experience />` (no props) renders `<section aria-labelledby="experience-heading">` with an h2 and an `<ol>` of `<Job>`.

- [ ] **Step 1: Write Job**

```svelte
<script lang="ts">
	import type { Job } from '$lib/resume';

	let { job }: { job: Job } = $props();
</script>

<li class="relative pb-12 pl-8 last:pb-0 sm:pl-10">
	<span
		class="absolute top-2 left-0 size-3 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_0_4px_rgb(92_225_255/0.15),0_0_18px_4px_rgb(92_225_255/0.5)]"
		aria-hidden="true"
	></span>
	<h3 class="font-display text-xl font-semibold text-white sm:text-2xl">
		{job.title} <span class="text-azure">· {job.company}</span>
	</h3>
	<p class="text-amber mt-1 text-sm">
		{job.dates}{#if job.location}<span class="text-ice/70"> · {job.location}</span>{/if}
	</p>
	<ul class="mt-4 space-y-3 leading-relaxed text-ice/90">
		{#each job.bullets as bullet (bullet)}
			<li class="relative pl-5 before:absolute before:top-[0.7em] before:left-0 before:size-1.5 before:rounded-full before:bg-azure/70">
				{bullet}
			</li>
		{/each}
	</ul>
</li>
```

- [ ] **Step 2: Write Experience**

```svelte
<script lang="ts">
	import { resume } from '$lib/resume';
	import Job from './Job.svelte';
</script>

<section aria-labelledby="experience-heading" class="mx-auto max-w-4xl px-4 py-12 sm:px-6">
	<h2 id="experience-heading" class="font-display text-cyan text-sm font-semibold tracking-[0.2em] uppercase">
		Experience
	</h2>
	<ol class="mt-8 ml-1.5 border-l border-azure/30">
		{#each resume.jobs as job (job.company)}
			<Job {job} />
		{/each}
	</ol>
</section>
```

- [ ] **Step 3: Validate**

Run svelte-autofixer on both files until clean, then `pnpm check`. Expected: 0 errors.

- [ ] **Step 4: Commit**

```bash
git add src/lib/components/Job.svelte src/lib/components/Experience.svelte
git commit -m "feat: add experience timeline

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 5: Skills and Education

**Files:**
- Create: `src/lib/components/Skills.svelte`
- Create: `src/lib/components/Education.svelte`

**Interfaces:**
- Consumes: `resume.skills`, `resume.education` from Task 2.
- Produces: `<Skills />` and `<Education />` (no props), each a `<section aria-labelledby=...>` with an h2.

- [ ] **Step 1: Write Skills**

```svelte
<script lang="ts">
	import { resume } from '$lib/resume';
</script>

<section aria-labelledby="skills-heading" class="mx-auto max-w-4xl px-4 py-12 sm:px-6">
	<h2 id="skills-heading" class="font-display text-cyan text-sm font-semibold tracking-[0.2em] uppercase">
		Skills
	</h2>
	<dl class="mt-8 space-y-6">
		{#each resume.skills as group (group.name)}
			<div>
				<dt class="text-sm font-medium text-ice/80">{group.name}</dt>
				<dd class="mt-2">
					<ul class="flex flex-wrap gap-2">
						{#each group.items as item (item)}
							<li class="rounded-full border border-azure/30 bg-cobalt/15 px-3 py-1 text-sm text-ice">
								{item}
							</li>
						{/each}
					</ul>
				</dd>
			</div>
		{/each}
	</dl>
</section>
```

- [ ] **Step 2: Write Education**

```svelte
<script lang="ts">
	import { resume } from '$lib/resume';
</script>

<section aria-labelledby="education-heading" class="mx-auto max-w-4xl px-4 py-12 pb-24 sm:px-6">
	<h2 id="education-heading" class="font-display text-cyan text-sm font-semibold tracking-[0.2em] uppercase">
		Education
	</h2>
	<p class="mt-8 text-lg text-white">
		{resume.education.degree}
		<span class="text-ice/80">— {resume.education.school}, {resume.education.year}</span>
	</p>
</section>
```

- [ ] **Step 3: Validate**

Run svelte-autofixer on both files until clean, then `pnpm check`. Expected: 0 errors.

- [ ] **Step 4: Commit**

```bash
git add src/lib/components/Skills.svelte src/lib/components/Education.svelte
git commit -m "feat: add skills and education sections

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 6: Compose page and metadata

**Files:**
- Modify: `src/routes/+page.svelte`

**Interfaces:**
- Consumes: `<Hero />`, `<Experience />`, `<Skills />`, `<Education />`, `resume.name`, `resume.summary`.
- Produces: the prerendered index page wrapped in `<main>` (Hero's `<header>` sits inside it).

- [ ] **Step 1: Write the page**

```svelte
<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Education from '$lib/components/Education.svelte';
	import { resume } from '$lib/resume';

	const title = `${resume.name} — Staff Software Engineer`;
	const description = resume.summary.split('. ')[0] + '.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta name="theme-color" content="#040816" />
</svelte:head>

<main>
	<Hero />
	<Experience />
	<Skills />
	<Education />
</main>
```

- [ ] **Step 2: Validate and build**

Run svelte-autofixer on the file until clean. Then:
`pnpm check && pnpm build && grep -o '<title>[^<]*</title>\|og:title\|name="description"' build/index.html`
Expected: 0 check errors; build succeeds; grep prints the title, `og:title`, and `name="description"`.

- [ ] **Step 3: Commit**

```bash
git add src/routes/+page.svelte
git commit -m "feat: compose resume page with metadata

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

### Task 7: Verify visually and for accessibility

**Files:**
- Modify (only if fixes are needed): any file above

- [ ] **Step 1: Contrast check**

Run in the scratchpad directory:

```bash
node -e '
const lum=h=>{const c=[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255).map(v=>v<=.03928?v/12.92:((v+.055)/1.055)**2.4);return .2126*c[0]+.7152*c[1]+.0722*c[2]};
const r=(a,b)=>{const[x,y]=[lum(a),lum(b)].sort((p,q)=>q-p);return ((x+.05)/(y+.05)).toFixed(2)};
for(const [n,fg] of Object.entries({ice:"#cfe8ff",azure:"#4f9dff",cyan:"#5ce1ff",amber:"#ffb066"}))
 for(const bg of ["#040816","#0a1330"]) console.log(n,bg,r(fg,bg));
'
```
Expected: every ratio ≥ 4.5. If `azure` on `#040816` falls short, lighten it to the lowest value that passes, in `layout.css`.

Note: `text-ice/90` and `text-ice/80` are alpha blends; confirm they still pass by computing `ice` at 0.8 opacity over `#0a1330` (about `#a5b9d1`-ish). If below 4.5, use `/90` instead.

- [ ] **Step 2: Full checks**

Run: `pnpm format && pnpm lint && pnpm check && pnpm build`
Expected: all pass. (`format` also sorts Tailwind classes.)

- [ ] **Step 3: Screenshots at two widths**

Start `pnpm dev` in the background. Use the `run` skill to capture full-page screenshots at 1280px and 390px wide, then read them. Confirm: no horizontal scroll at 390px (email and LinkedIn URL wrap), timeline nodes align with the rail, hero gradient text is legible, and the background shows nebula glow and stars.

- [ ] **Step 4: Motion and keyboard**

Confirm the drift animation is under `@media (prefers-reduced-motion: no-preference)` in `Starfield.svelte`. Tab through the page and confirm each contact link shows the cyan focus ring in reading order. Confirm the heading outline is h1, then h2 (Experience, Skills, Education), with h3 per job.

- [ ] **Step 5: Fix anything found, then commit**

```bash
git add -A
git commit -m "chore: polish and verify resume site

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```
Skip the commit if nothing changed.
