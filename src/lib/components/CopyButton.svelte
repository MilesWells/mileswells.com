<script lang="ts">
	import CheckIcon from './icons/CheckIcon.svelte';
	import CopyIcon from './icons/CopyIcon.svelte';
	import XIcon from './icons/XIcon.svelte';

	let { text, label }: { text: string; label: string } = $props();

	type Status = 'idle' | 'copied' | 'failed';
	const messages: Record<Status, string> = {
		idle: '',
		copied: 'Copied to clipboard',
		failed: "Couldn't copy"
	};

	const icons = { idle: CopyIcon, copied: CheckIcon, failed: XIcon };

	let status = $state<Status>('idle');
	const StatusIcon = $derived(icons[status]);
	let timer: NodeJS.Timeout | undefined;

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
	data-status={status}
	class="flex cursor-pointer items-center rounded-r-full border-l border-azure/30 py-2.5 pr-4 pl-3 text-azure hover:bg-cobalt/25 hover:text-cyan data-[status=copied]:text-cyan data-[status=failed]:text-amber"
>
	<StatusIcon />
</button>

<span class="sr-only" role="status">
	{messages[status]}
</span>
