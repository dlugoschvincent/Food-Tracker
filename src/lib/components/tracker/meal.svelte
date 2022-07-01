<script lang="ts">
  import Serving from '$lib/components/tracker/serving.svelte';
  import Icon from '@iconify/svelte';
  import { selectedDate } from '$lib/stores/dateStore';
  import type { definitions } from 'types/database';
  export let meal: string;
  export let servings: (definitions['UserAteFood'] & { Food: definitions['Food'] })[];

  $: currentNotSelectedDate = !($selectedDate.toDateString() === new Date().toDateString());
</script>

<div class="grid rounded-md border-2 border-orange-200">
  <div>
    <div class="grid grid-flow-col border-orange-100 p-2">
      <h2 class="my-auto ">{meal}:</h2>
      <a
        href="./scan?meal={meal}"
        class:currentNotSelectedDate
        class="justify-self-end rounded-full bg-orange-300 p-2">
        <Icon width="20" icon="akar-icons:plus" />
      </a>
    </div>
  </div>
  {#if servings}
    {#each servings as serving}
      <Serving {serving} />
    {/each}
  {/if}
</div>

<style>
  .currentNotSelectedDate {
    @apply pointer-events-none bg-slate-400;
  }
</style>
