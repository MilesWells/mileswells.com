<script lang="ts">
	import { resume } from '$lib/resume';
	import CopyButton from './CopyButton.svelte';
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
	<ul role="list" class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
		{#each resume.contacts as contact (contact.label)}
			<li class="min-w-0">
				<!-- eslint-disable svelte/no-navigation-without-resolve -- external, mailto and tel links -->
				{#if contact.copyable}
					<span class="inline-flex max-w-full rounded-full border border-azure/30 bg-cobalt/15">
						<a
							href={contact.href}
							class="flex min-w-0 items-center gap-2 rounded-l-full py-2.5 pr-3 pl-4 text-azure hover:bg-cobalt/25 hover:text-cyan"
							aria-label="{contact.label}: {contact.text}"
						>
							<svg
								class="size-4 shrink-0"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<rect width="20" height="16" x="2" y="4" rx="2" />
								<path d="m22 7-10 6L2 7" />
							</svg>
							<span class="break-all">{contact.text}</span>
						</a>
						<CopyButton text={contact.text} label="Copy {contact.label.toLowerCase()} address" />
					</span>
				{:else}
					<a
						href={contact.href}
						class="break-all text-azure underline decoration-azure/40 hover:text-cyan hover:decoration-cyan"
						aria-label="{contact.label}: {contact.text}"
					>
						{contact.text}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</header>
