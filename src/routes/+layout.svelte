<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Starfield from '$lib/components/Starfield.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Starfield />
{@render children()}
