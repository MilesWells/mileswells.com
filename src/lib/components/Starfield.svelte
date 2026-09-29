<script lang="ts">
	// Deterministic PRNG so server and client render identical stars.
	function mulberry32(seed: number) {
		return () => {
			seed |= 0;
			seed = (seed + 0x6d2b79f5) | 0;
			let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
			t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
			return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
		};
	}

	function stars(count: number, seed: number, color: string) {
		const rand = mulberry32(seed);
		return Array.from(
			{ length: count },
			() => `${(rand() * 100).toFixed(2)}vw ${(rand() * 200).toFixed(2)}vh 0 ${color}`
		).join(',');
	}

	const near = stars(40, 7, 'rgb(207 232 255 / 0.9)');
	const far = stars(90, 21, 'rgb(207 232 255 / 0.45)');
</script>

<div class="nebula" aria-hidden="true"></div>
<div class="stars far" style:--shadow={far} aria-hidden="true"></div>
<div class="stars near" style:--shadow={near} aria-hidden="true"></div>

<style>
	.nebula,
	.stars {
		position: fixed;
		inset: 0;
		z-index: -1;
		pointer-events: none;
	}
	.nebula {
		background:
			radial-gradient(60rem 40rem at 15% 10%, rgb(47 91 234 / 0.35), transparent 60%),
			radial-gradient(50rem 36rem at 85% 30%, rgb(92 225 255 / 0.16), transparent 60%),
			radial-gradient(45rem 30rem at 50% 95%, rgb(79 157 255 / 0.22), transparent 65%),
			radial-gradient(30rem 20rem at 92% 92%, rgb(255 176 102 / 0.08), transparent 70%),
			linear-gradient(
				180deg,
				var(--color-space-950),
				var(--color-space-900) 60%,
				var(--color-space-950)
			);
	}
	.stars::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 1px;
		height: 1px;
		box-shadow: var(--shadow);
	}
	.stars.near::after {
		width: 2px;
		height: 2px;
		border-radius: 50%;
	}
</style>
