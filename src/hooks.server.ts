// import type { Handle } from '@sveltejs/kit'
// import { handle as handle_auth } from './auth'
// import { sequence } from '@sveltejs/kit/hooks'
//
// const handle_unocss: Handle = async ({ event, resolve }) => {
// 	const response = await resolve(event, {
// 		transformPageChunk: ({ html }) =>
// 			html.replace('%unocss-svelte-scoped.global%', 'unocss_svelte_scoped_global_styles')
// 	})
// 	return response
// }
//
// export handle handle_auth
export { handle } from "./auth"
