import type { Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) =>
	resolve(event, {
		preload: ({ type, path }) => type === 'font' && path.includes('-latin-wght-normal')
	});
