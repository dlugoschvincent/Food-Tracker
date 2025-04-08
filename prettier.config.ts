import { type Config } from 'prettier'

const config: Config = {
	bracketSameLine: true,
	singleAttributePerLine: true,
	semi: false,
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	plugins: [
		'prettier-plugin-svelte',
		'prettier-plugin-organize-imports',
		'prettier-plugin-package',
		'prettier-plugin-tailwindcss'
	],
	organizeImportsSkipDestructiveCodeActions: true,
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte'
			}
		}
	]
}

export default config
