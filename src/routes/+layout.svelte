<script lang="ts">
  import Navbar from '$lib/components/navbar.svelte'
  import { supabaseClient } from '$lib/db'
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'
  // import 'uno.css'

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
</script>

<div class="min-h-screen dark:bg-zinc-900 dark:text-white">
  <Navbar />
  <main class="container mx-auto grid p-4 gap-4">
    <slot />
  </main>
</div>

<style>
  :global(body) {
    --at-apply: "dark:bg-zinc-900";
  }
</style>
