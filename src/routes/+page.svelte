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
