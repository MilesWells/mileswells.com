<script lang="ts">
	import { resume } from '$lib/resume';
</script>

<section aria-labelledby="education-heading" class="mx-auto max-w-4xl px-4 py-12 pb-24 sm:px-6">
	<h2
		id="education-heading"
		class="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase"
	>
		Education
	</h2>
	<p class="mt-8 text-lg text-white">
		{resume.education.degree}
		<span class="text-ice/80">— {resume.education.school}, {resume.education.year}</span>
	</p>
</section>
