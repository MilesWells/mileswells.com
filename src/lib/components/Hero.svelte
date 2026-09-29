<script lang="ts">
	import { resume } from '$lib/resume';
</script>

<header class="mx-auto max-w-4xl px-4 pt-20 pb-12 sm:px-6 sm:pt-32">
	<p class="text-sm font-medium tracking-[0.2em] text-amber uppercase">
		{resume.jobs[0].title} · {resume.location}
	</p>
	<h1
		class="mt-4 bg-linear-to-r from-white via-ice to-cyan bg-clip-text font-display text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
	>
		{resume.name}
	</h1>
	<p class="mt-8 max-w-2xl text-lg leading-relaxed text-ice/90">{resume.summary}</p>
	<ul class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
		{#each resume.contacts as contact (contact.label)}
			<li class="min-w-0">
				<!-- eslint-disable svelte/no-navigation-without-resolve -- external, mailto and tel links -->
				<a
					href={contact.href}
					class="break-all text-azure underline decoration-azure/40 hover:text-cyan hover:decoration-cyan"
					aria-label="{contact.label}: {contact.text}"
				>
					{contact.text}
				</a>
			</li>
		{/each}
	</ul>
</header>
