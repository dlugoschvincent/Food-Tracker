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
</script>

<div class="dark">
  <div class="dark:bg-slate-700 dark:text-light-200 min-h-screen">
    {#if $session.user}
      <Navbar />
    {/if}
    <SupaAuthHelper {session} {supabaseClient}>
      <main class="container mx-auto grid p-4 gap-4">
        <slot />
      </main>
    </SupaAuthHelper>
  </div>
</div>
