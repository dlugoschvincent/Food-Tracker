import extractorSvelte from '@unocss/extractor-svelte'
import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
	extractors: [extractorSvelte()],
	shortcuts: [
		{
			'disable-anchor': 'opacity-30 pointer-events-none touch-none',
			'input-text':
				'bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-orange-200 focus:border-orange-200 focus:outline-none block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-orange-400 dark:focus:border-orange-400'
		}
	],
	presets: [
		presetUno(),
		presetIcons({
			scale: 2
		})
	]
})
