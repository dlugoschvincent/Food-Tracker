<script>
  import Signup from '$lib/components/login/signup.svelte';
  import Login from '$lib/components/login/login.svelte';

  let method = 'signup';
</script>

<div class="grid w-64 grid-cols-2 gap-2 rounded-md border-2 border-orange-200 p-4">
  <button
    class:bg-orange-500={method === 'login'}
    class="rounded-md bg-orange-300 p-2"
    on:click={() => {
      method = 'login';
    }}>Sign Up</button>
  <button
    class:bg-orange-500={method === 'signup'}
    class="rounded-md bg-orange-300 p-2"
    on:click={() => {
      method = 'signup';
    }}>Login</button>
  {#if method === 'signup'}
    <Login />
  {:else}
    <Signup />
  {/if}
</div>
