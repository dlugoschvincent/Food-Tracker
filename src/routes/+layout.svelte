<script lang="ts">
  import Navbar from '$lib/components/navbar.svelte'
  import { darkmode } from '$lib/stores/darkmodeStore'
  import '@unocss/reset/tailwind.css'
  import 'uno.css'

  import '$lib/db'
  import { startSupabaseSessionSync } from '@supabase/auth-helpers-sveltekit'
  import { invalidateAll } from '$app/navigation'
  import { page } from '$app/stores'

  // this sets up automatic token refreshing
  startSupabaseSessionSync({page, handleRefresh: () => invalidateAll()})
</script>

<div class:dark={$darkmode}>
  <div class="min-h-screen dark:bg-black dark:text-white">
    <Navbar />
    <main class="container mx-auto grid p-4 gap-4">
      <slot />
    </main>
  </div>
</div>
