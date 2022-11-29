import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
	plugins: [
		UnoCSS({
			mode: 'svelte-scoped',
			shortcuts: [
				{
					'disable-anchor': 'opacity-30 pointer-events-none touch-none',
					'input-text':
						'rounded-md border-2 border-orange-200 focus:border-orange-300 p-2 dark:border-orange-400 dark:focus:border-orange-500 dark:bg-slate-700 focus:outline-none'
				}
			],
			transformers: [transformerDirectives(), transformerVariantGroup()],
			presets: [presetUno(), presetIcons()]
		}),
		sveltekit()
	]
})
