<script lang="ts">
	import { browser } from '$app/environment'
	import Navbar from '$lib/components/navbar.svelte'
	import { setContext, type Snippet } from 'svelte'
	import 'uno.css'
	import '@unocss/reset/tailwind-compat.css'

	interface Props {
		children: Snippet
	}

	let { children }: Props = $props()

	let darkMode = $state({ on: false })
	let infoMode = $state({ on: false })

	setContext('darkMode', darkMode)
	setContext('infoMode', infoMode)

	if (browser) {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			darkMode.on = true
		}
	}

	$effect(() => {
		if (darkMode.on) {
			window.document.body.classList.add('dark')
		} else {
			window.document.body.classList.remove('dark')
		}
	})
</script>

<div class="flex min-h-dvh flex-col dark:bg-zinc-900 dark:text-white">
	<Navbar />
	<main class="container mx-auto flex h-full grow flex-col gap-4 p-4">
		{@render children()}
	</main>
</div>
