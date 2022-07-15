<script lang="ts">
  import { goto } from '$app/navigation';
  import { session } from '$app/stores';
  import { onMount } from 'svelte';
  onMount(() => {
    if ($session.user) {
      goto(`/${new Date().toISOString().slice(0, 10)}`);
    } 
  });
</script>

<svelte:head>
  <title>Food Tracker Homepage</title>
</svelte:head>
