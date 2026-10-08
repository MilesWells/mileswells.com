<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<span class="inline-flex max-w-full rounded-full border border-azure/30 bg-cobalt/15">
	{@render children()}
</span>
