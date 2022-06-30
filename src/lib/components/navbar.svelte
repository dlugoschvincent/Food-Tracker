<script>
  import Logout from './login/logout.svelte';
</script>

<nav class="bg-orange-300">
  <div class="container mx-auto grid grid-flow-col items-center justify-between p-4">
    <div class="text-xl">
      <a href="/">Home</a>
    </div>
    <div class="hidden items-center justify-end gap-8 sm:flex">
      <Logout />
    </div>
    <div class="flex gap-4 sm:hidden"><Logout /></div>
  </div>
</nav>
