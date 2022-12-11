<script lang="ts">
	import { browser } from '$app/environment'
	import Navbar from '$lib/components/navbar.svelte'

	if (browser) {
		if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
			window.document.body.classList.toggle('dark')
		}
	}
</script>

<div class="min-h-screen dark:bg-zinc-900 dark:text-white">
	<Navbar />
	<main class="container mx-auto grid gap-4 p-4">
		<slot />
	</main>
</div>
