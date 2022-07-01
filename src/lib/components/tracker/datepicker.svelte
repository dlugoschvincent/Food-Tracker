<script lang="ts">
  import Icon from '@iconify/svelte';
  import { navigating } from '$app/stores';
  import { fade, scale } from 'svelte/transition';
  import { selectedDate } from '$lib/stores/dateStore';
  import { DoubleBounce } from 'svelte-loading-spinners';
  $: currentDate = new Date($selectedDate);
  $: prevDate = new Date(new Date(currentDate).setDate(currentDate.getDate() - 1));
  $: nextDate = new Date(new Date(currentDate).setDate(currentDate.getDate() + 1));
</script>

<div class="grid grid-flow-col justify-between rounded-md border-2 border-transparent p-2">
  <a
    href="/{prevDate.getTime()}"
    class:disable-anchor={$navigating}
    class="rounded-full bg-orange-300 p-2">
    <Icon width="20" icon="akar-icons:arrow-left" />
  </a>

  {#if !$navigating}
    <div in:scale|local={{ duration: 200 }} class="place-self-center align-middle text-xl">
      {$selectedDate.toDateString()}
    </div>
  {:else}
    <div in:fade class="place-self-center">
      <DoubleBounce color="#fdba74" size="30" />
    </div>
  {/if}

  <a
    href="/{nextDate.getTime()}"
    class:disable-anchor={$navigating}
    class="rounded-full bg-orange-300 p-2">
    <Icon width="20" icon="akar-icons:arrow-right" />
  </a>
</div>
