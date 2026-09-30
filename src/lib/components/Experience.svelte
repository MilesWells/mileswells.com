<script lang="ts">
	import { jobs } from '$lib/jobs';
	import Job from './Job.svelte';
</script>

<section aria-labelledby="experience-heading" class="mx-auto max-w-4xl px-4 py-12 sm:px-6">
	<h2
		id="experience-heading"
		class="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase"
	>
		Experience
	</h2>

	<ol role="list" class="mt-8 ml-1.5 border-l border-azure/30">
		{#each jobs as job (job.company)}
			<Job {job} />
		{/each}
	</ol>
</section>
