<script lang="ts">
  import Navbar from '$lib/components/navbar.svelte'
  import { darkmode } from '$lib/stores/darkmodeStore'
  import '@unocss/reset/tailwind.css'
  import 'uno.css'

  import { supabaseClient } from '$lib/db'
  import { invalidate } from '$app/navigation'
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
</script>

<div class:dark={$darkmode}>
  <div class="min-h-screen dark:bg-black dark:text-white">
    <Navbar />
    <main class="container mx-auto grid p-4 gap-4">
      <slot />
    </main>
  </div>
</div>
