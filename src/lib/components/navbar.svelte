<script>
  import Toggleinfo from './info/toggleinfo.svelte'
  import Logout from './login/logout.svelte'
  import Darkmodetoggle from '$lib/components/darkmodetoggle.svelte'
</script>

<nav>
  <div class="container mx-auto min-h-[72px] grid grid-flow-col p-4">
    <div class="text-xl auto-cols-min grid grid-flow-col gap-4 place-items-center">
      {#if true}
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
