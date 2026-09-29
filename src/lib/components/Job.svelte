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
	<p class="mt-1 text-sm text-amber">
		{job.dates}{#if job.location}<span class="text-ice/70"> · {job.location}</span>{/if}
	</p>
	<ul role="list" class="mt-4 space-y-3 leading-relaxed text-ice/90">
		{#each job.bullets as bullet (bullet)}
			<li
				class="relative pl-5 before:absolute before:top-[0.7em] before:left-0 before:size-1.5 before:rounded-full before:bg-azure/70"
			>
				{bullet}
			</li>
		{/each}
	</ul>
</li>
