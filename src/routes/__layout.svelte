<script context="module" lang="ts">
  import type { Load } from './__types';
  export const load: Load = async ({ url, session }) => {
    if (session.user === null && url.pathname !== '/auth/signin') {
      return {
        redirect: '/auth/signin',
        status: 303
      };
    }
    return { status: 200 };
  };
</script>

<script lang="ts">
  import '@unocss/reset/tailwind.css';
  import 'uno.css';
  import { session } from '$app/stores';
  import { supabaseClient } from '$lib/supabaseclient';
  import { SupaAuthHelper } from '@supabase/auth-helpers-svelte';
  import Navbar from '$lib/components/navbar.svelte';
  import { darkmode } from '$lib/stores/darkmodeStore';
</script>

<SupaAuthHelper {session} {supabaseClient}>
  <div class:dark={$darkmode}>
    <div class="dark:bg-black dark:text-white min-h-screen">
      <Navbar />
      <main class="container mx-auto grid p-4 gap-4">
        <slot />
      </main>
    </div>
  </div>
</SupaAuthHelper>
