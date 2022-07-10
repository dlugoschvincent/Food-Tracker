<script lang="ts">
  import { slide } from 'svelte/transition';
  import { navigating } from '$app/stores';

  import type { definitions } from 'types/database';

  import Delete from './delete.svelte';

  export let serving: definitions['UserAteFood'] & { Food: definitions['Food'] };

  let deleted: boolean = false;
</script>

{#if !deleted && !$navigating}
  <div
    transition:slide={{ duration: 200 }}
    class="border-t-2 border-orange-200 grid grid-flow-col p-2 dark:border-orange-400 ">
    <div class="my-auto">{serving.Food.name}</div>
    <div class="my-auto justify-self-end">{serving.grams}g</div>
    <Delete id={serving.meal_id} name={serving.Food.name} bind:deleted />
  </div>
{/if}
