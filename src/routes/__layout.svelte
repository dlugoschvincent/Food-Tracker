<script lang="ts">
  import '@unocss/reset/tailwind.css';
  import 'uno.css';
  import { session } from '$app/stores';
  import { supabaseClient } from '$lib/supabaseclient';
  import { SupaAuthHelper } from '@supabase/auth-helpers-svelte';
  import User from '$lib/components/login/user.svelte';
  import Navbar from '$lib/components/navbar.svelte';
</script>

<div class="dark">
  <div class="min-h-screen dark:bg-slate-700 dark:text-light-200">
    <SupaAuthHelper {session} {supabaseClient}>
      <Navbar />
      <main class="container mx-auto  grid p-4 gap-4">
        <slot />
      </main>
    </SupaAuthHelper>
  </div>
</div>
