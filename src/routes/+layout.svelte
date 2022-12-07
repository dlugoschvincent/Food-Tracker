<script lang="ts">
	import { browser } from '$app/environment'
	import { invalidate } from '$app/navigation'
	import Navbar from '$lib/components/navbar.svelte'
	import { supabaseClient } from '$lib/db'
	import { onMount } from 'svelte'

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidate('supabase:auth')
		})

		return () => {
			subscription.unsubscribe()
		}
	})

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
