import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
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
