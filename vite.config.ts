import { sveltekit } from '@sveltejs/kit/vite'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		UnoCSS({
			mode: 'svelte-scoped',
			shortcuts: [
				{
					'disable-anchor': 'opacity-30 pointer-events-none touch-none',
					'input-text':
						'bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-orange-200 focus:border-orange-200 focus:outline-none block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-orange-400 dark:focus:border-orange-400'
				}
			],
			presets: [presetUno(), presetIcons()]
		}),
		sveltekit()
	],
	resolve: {
		alias: {
			'.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js'
		}
	}
})
