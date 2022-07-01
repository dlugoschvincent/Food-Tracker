<script lang="ts">
  import Icon from '@iconify/svelte';
  import { navigating } from '$app/stores';
  import { fade, scale } from 'svelte/transition';
  import { selectedDate } from '$lib/stores/dateStore';

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
    <div transition:scale|local={{ duration: 200 }} class="place-self-center align-middle text-xl">
      {$selectedDate.toDateString()}
    </div>
  {:else}
    <!-- <div class="place-self-center hidden" in:fade={{delay:400}}>Waiting...</div> -->
  {/if}

  <a
    href="/{nextDate.getTime()}"
    class:disable-anchor={$navigating}
    class="rounded-full bg-orange-300 p-2">
    <Icon width="20" icon="akar-icons:arrow-right" />
  </a>
</div>
