import adapter from '@sveltejs/adapter-node'
// import preprocess from 'svelte-preprocess'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter()
	},

	vitePlugin: {
		experimental: {
			inspector: true
		}
	}
}

export default config
