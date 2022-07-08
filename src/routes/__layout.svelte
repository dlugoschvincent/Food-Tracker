<script lang="ts">
  import '@unocss/reset/tailwind.css';
  import 'uno.css';

  import { supabase } from '$lib/supabaseclient';
  import User from '$lib/components/login/user.svelte';
  import Navbar from '$lib/components/navbar.svelte';
  import { user } from '$lib/stores/userStore';

  supabase.auth.onAuthStateChange((_) => {
    if (_ === 'SIGNED_IN') {
      user.set(supabase.auth.user());
    }
    if (_ === 'SIGNED_OUT') {
      user.set(null);
    }
  });
</script>

<div class="dark">
  <div class="min-h-screen dark:bg-slate-700 dark:text-light-200">
    {#if $user}
      <Navbar />
      <main class="container mx-auto  grid p-4 gap-4">
        <slot />
      </main>
    {:else}
      <div class="h-screen grid place-items-center">
        <User />
      </div>
    {/if}
  </div>
</div>
