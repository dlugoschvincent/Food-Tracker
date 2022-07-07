<script lang="ts">
  import { navigating } from '$app/stores';
  import { fade, scale } from 'svelte/transition';
  import { selectedDate } from '$lib/stores/dateStore';
  import {} from 'svelte/animate';
  $: selectedDateClone = new Date($selectedDate);
  $: prevDate = new Date(new Date(selectedDateClone).setDate(selectedDateClone.getDate() - 1));
  $: nextDate = new Date(new Date(selectedDateClone).setDate(selectedDateClone.getDate() + 1));
  $: isCurrentDate = $selectedDate.toDateString() === new Date().toDateString();
</script>

<div class="border-transparent rounded-md border-2 grid grid-flow-col p-2 justify-between">
  <a
    href="/{prevDate.toISOString().slice(0, 10)}"
    class:disable-anchor={$navigating}
    class="rounded-full bg-orange-300 grid p-2 place-items-center"
    aria-label="Previous date">
    <div class="text-xl i-akar-icons:arrow-left" />
  </a>

  {#if !$navigating}
    <div in:scale|local={{ duration: 200 }} class="text-xl place-self-center">
      {$selectedDate.toDateString()}
    </div>
  {:else}
    <div class="animate-spin text-4xl text-orange-300 i-quill:loading-spin place-self-center" />
  {/if}
  <a
    href="/{nextDate.toISOString().slice(0, 10)}"
    class:disable-anchor={$navigating || isCurrentDate}
    class="rounded-full bg-orange-300 grid p-2 place-items-center"
    aria-label="Next date">
    <div class="text-xl i-akar-icons:arrow-right" />
  </a>
</div>
