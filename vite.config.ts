import { sveltekit } from '@sveltejs/kit/vite'
import UnoCSS from '@unocss/svelte-scoped/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		UnoCSS({
			injectReset: '@unocss/reset/tailwind.css'
		}),
		sveltekit()
	],
	resolve: {
		alias: {
			'.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js'
		}
	}
})
