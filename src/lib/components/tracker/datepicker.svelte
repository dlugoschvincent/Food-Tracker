<script lang="ts">
  import Icon from '@iconify/svelte';
  import { page, navigating } from '$app/stores';
  import { fade } from 'svelte/transition';

  $: currentDate = new Date(parseInt($page.params.date));
  $: prevDate = new Date(new Date(currentDate).setDate(currentDate.getDate() - 1));
  $: nextDate = new Date(new Date(currentDate).setDate(currentDate.getDate() + 1));
</script>

<div class="grid grid-flow-col justify-between rounded-md border-2 border-transparent p-2">
  <a sveltekit:prefetch href="/{prevDate.getTime()}" class="rounded-full bg-orange-300 p-2">
    <Icon width="20" icon="akar-icons:arrow-left" />
  </a>
  {#if $navigating}
    <div in:fade={{ duration: 200 }} class="place-self-center align-middle text-xl">Waiting...</div>
  {:else}
    <div in:fade={{ duration: 200 }} class="place-self-center align-middle text-xl">
      {currentDate.toDateString()}
    </div>
  {/if}
  <a sveltekit:prefetch href="/{nextDate.getTime()}" class="rounded-full bg-orange-300 p-2">
    <Icon width="20" icon="akar-icons:arrow-right" />
  </a>
</div>
