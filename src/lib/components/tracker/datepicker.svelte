<script lang="ts">
  import Icon from '@iconify/svelte';
  import arrowRight from '@iconify/icons-akar-icons/arrow-right';
  import arrowLeft from '@iconify/icons-akar-icons/arrow-left';

  import { navigating } from '$app/stores';
  import { fade, scale } from 'svelte/transition';
  import { selectedDate } from '$lib/stores/dateStore';
  import { Circle } from 'svelte-loading-spinners';

  $: selectedDateClone = new Date($selectedDate);
  $: prevDate = new Date(new Date(selectedDateClone).setDate(selectedDateClone.getDate() - 1));
  $: nextDate = new Date(new Date(selectedDateClone).setDate(selectedDateClone.getDate() + 1));
  $: isCurrentDate = $selectedDate.toDateString() === new Date().toDateString();
</script>

<div class="grid grid-flow-col justify-between rounded-md border-2 border-transparent p-2">
  <a
    href="/{prevDate.toISOString().slice(0, 10)}"
    class:disable-anchor={$navigating}
    class="grid place-items-center rounded-full bg-orange-300 p-2"
    aria-label="Previous date">
    <Icon width="20" icon={arrowLeft} />
  </a>

  {#if !$navigating}
    <div in:scale|local={{ duration: 200 }} class="place-self-center text-xl">
      {$selectedDate.toDateString()}
    </div>
  {:else}
    <div in:fade class="place-self-center">
      <Circle color="#fdba74" size="30" />
    </div>
  {/if}
  <a
    href="/{nextDate.toISOString().slice(0, 10)}"
    class:disable-anchor={$navigating || isCurrentDate}
    class="grid place-items-center rounded-full bg-orange-300 p-2"
    aria-label="Next date">
    <Icon width="20" icon={arrowRight} />
  </a>
</div>
