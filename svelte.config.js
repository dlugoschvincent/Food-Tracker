import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		// Needs solution
		csrf: {
			checkOrigin: false
		}
	},

	vitePlugin: {
		inspector: {
			showToggleButton: 'always'
		}
	}
}

export default config
