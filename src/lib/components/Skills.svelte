<script lang="ts">
	const groups = [
		{
			name: 'Languages & Frameworks',
			items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', '.NET / C#']
		},
		{
			name: 'Testing',
			items: [
				'Chromatic',
				'Storybook',
				'Playwright',
				'Schema Validation',
				'Visual Regression',
				'E2E'
			]
		},
		{
			name: 'Data',
			items: ['REST APIs', 'WebSockets', 'PostgreSQL', 'Elasticsearch', 'RabbitMQ']
		},
		{ name: 'Auth', items: ['OAuth', 'OIDC', 'SAML'] }
	];
</script>

<section aria-labelledby="skills-heading" class="mx-auto max-w-4xl px-4 py-12 sm:px-6">
	<h2
		id="skills-heading"
		class="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase"
	>
		Skills
	</h2>

	<dl class="mt-8 space-y-6">
		{#each groups as group (group.name)}
			<div>
				<dt class="text-sm font-medium text-ice/80">{group.name}</dt>

				<dd class="mt-2">
					<ul role="list" class="flex flex-wrap gap-2">
						{#each group.items as item (item)}
							<li
								class="rounded-full border border-azure/30 bg-cobalt/15 px-3 py-1 text-sm text-ice"
							>
								{item}
							</li>
						{/each}
					</ul>
				</dd>
			</div>
		{/each}
	</dl>
</section>
