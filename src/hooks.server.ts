import type { Handle } from '@sveltejs/kit'

export const handle = (async ({ event, resolve }) => {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('%unocss-svelte-scoped.global%', 'unocss_svelte_scoped_global_styles')
	})
	return response
}) satisfies Handle
