<script lang="ts">
	import CopyButton from './CopyButton.svelte';
	import DownloadIcon from './icons/DownloadIcon.svelte';
	import LinkedInIcon from './icons/LinkedInIcon.svelte';
	import MailIcon from './icons/MailIcon.svelte';
	import Pill from './Pill.svelte';
	import { asset } from '$app/paths';
	import profile from '$lib/assets/profile.webp';
</script>

<header class="mx-auto max-w-4xl px-4 pt-20 sm:px-6 sm:pt-32">
	<div class="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
		<img
			src={profile}
			alt="Miles Wells holding a cat"
			width="320"
			height="320"
			class="size-28 shrink-0 rounded-full object-cover ring-2 ring-azure/60 ring-offset-4 ring-offset-space-950 sm:size-40"
		/>

		<div>
			<p class="text-sm font-medium tracking-[0.2em] text-amber uppercase">
				Staff Software Engineer · Durham, NC
			</p>

			<h1
				class="mt-4 bg-linear-to-r from-white via-ice to-cyan bg-clip-text font-display text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
			>
				Miles Wells
			</h1>
		</div>
	</div>

	<p class="mt-8 max-w-2xl text-lg leading-relaxed text-ice/90">
		Staff Software Engineer with 10 years of full-stack experience, specializing in UI architecture
		and the integration layer between frontends and backend services. Spent seven years as the sole
		UI engineer at a robotics integrations software company, owning front-end architecture, testing
		standards, performance, and design-driven UX. TypeScript-first, with a rigorous approach to
		testing and a pragmatic approach to AI-assisted development.
	</p>

	<div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
		<Pill>
			<a
				href="mailto:milescwells@pm.me"
				class="flex min-w-0 items-center gap-2 rounded-l-full py-2.5 pr-3 pl-4 text-azure hover:bg-cobalt/25 hover:text-cyan"
			>
				<MailIcon />

				<span class="break-all">milescwells@pm.me</span>
			</a>

			<CopyButton text="milescwells@pm.me" label="Copy email address" />
		</Pill>

		<Pill>
			<a
				href="https://linkedin.com/in/mileswells"
				target="_blank"
				rel="noopener noreferrer"
				class="flex min-w-0 items-center gap-2 rounded-full py-2.5 pr-4 pl-4 text-azure hover:bg-cobalt/25 hover:text-cyan"
			>
				<LinkedInIcon />

				<span class="break-all">Connect</span>
			</a>
		</Pill>

		<Pill>
			<a
				href={asset('/miles-wells-resume.pdf')}
				download
				class="flex min-w-0 items-center gap-2 rounded-full py-2.5 pr-4 pl-4 text-azure hover:bg-cobalt/25 hover:text-cyan"
			>
				<DownloadIcon />

				<span>Resume<span class="sr-only"> (PDF download)</span></span>
			</a>
		</Pill>
	</div>
</header>
