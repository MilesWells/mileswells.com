<script lang="ts">
	let { text, label }: { text: string; label: string } = $props();

	let status = $state<'idle' | 'copied' | 'failed'>('idle');
	let timer: ReturnType<typeof setTimeout> | undefined;

	async function copy() {
		clearTimeout(timer);
		try {
			await navigator.clipboard.writeText(text);
			status = 'copied';
		} catch {
			status = 'failed';
		}
		timer = setTimeout(() => (status = 'idle'), 2000);
	}

	$effect(() => () => clearTimeout(timer));
</script>

<button
	type="button"
	onclick={copy}
	aria-label={label}
	class="flex items-center rounded-r-full border-l border-azure/30 py-2.5 pr-4 pl-3 hover:bg-cobalt/25 hover:text-cyan {status ===
	'copied'
		? 'text-cyan'
		: status === 'failed'
			? 'text-amber'
			: 'text-azure'}"
>
	<svg
		class="size-4"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		{#if status === 'copied'}
			<path d="M20 6 9 17l-5-5" />
		{:else if status === 'failed'}
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		{:else}
			<rect width="14" height="14" x="8" y="8" rx="2" />
			<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
		{/if}
	</svg>
</button>
<span class="sr-only" role="status">
	{status === 'copied' ? 'Copied to clipboard' : status === 'failed' ? "Couldn't copy" : ''}
</span>
