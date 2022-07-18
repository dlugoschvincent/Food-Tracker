<script>
  import Toggleinfo from './info/toggleinfo.svelte';
  import Logout from './login/logout.svelte';
  import Darkmodetoggle from '$lib/components/darkmodetoggle.svelte';
  import { session } from '$app/stores';
</script>

<nav>
  <div class="container mx-auto grid grid-flow-col p-4 min-h-[72px]">
    <div class="grid gap-4 grid-flow-col auto-cols-min text-xl place-items-center">
      {#if $session.user}
        <a href="/{new Date().toISOString().slice(0, 10)}">Today</a>
      {/if}
      <Darkmodetoggle />
      <Toggleinfo />
    </div>
    <div class="place-self-end">
      <Logout />
    </div>
  </div>
</nav>
