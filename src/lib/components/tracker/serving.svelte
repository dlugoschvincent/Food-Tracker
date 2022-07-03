<script lang="ts">
  import Icon from '@iconify/svelte';
  import crossIcon from '@iconify/icons-akar-icons/cross';

  import { supabase } from '$lib/supabaseclient';
  import { slide } from 'svelte/transition';
  import { navigating } from '$app/stores';

  import type { definitions } from 'types/database';

  export let serving: definitions['UserAteFood'] & { Food: definitions['Food'] };

  let deleted: boolean = false;

  async function deleteServing(mealId: number) {
    deleted = true;
    await supabase
      .from<definitions['UserAteFood'] & { Food: definitions['Food'] }>('UserAteFood')
      .delete()
      .eq('meal_id', mealId);
  }
</script>

{#if !deleted && !$navigating}
  <div
    transition:slide={{ duration: 200 }}
    class="grid grid-flow-col border-t-2 border-orange-100 p-2">
    <div class="my-auto">{serving.Food.name}</div>
    <div class="my-auto justify-self-end">{serving.grams}g</div>
    <button
      class="justify-self-end rounded-full bg-red-500 p-2"
      on:click={() => deleteServing(serving.meal_id)}
      ><Icon width="20" icon={crossIcon} />
    </button>
  </div>
{/if}
