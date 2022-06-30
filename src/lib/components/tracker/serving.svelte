<script lang="ts">
  import { supabase } from '$lib/supabaseclient';
  import type { definitions } from 'types/database';
  import Icon from '@iconify/svelte';
  export let serving: definitions['UserAteFood'] & { Food: definitions['Food'] };

  async function deleteServing(mealId: number) {
    await supabase
      .from<definitions['UserAteFood'] & { Food: definitions['Food'] }>('UserAteFood')
      .delete()
      .eq('meal_id', mealId);
  }
</script>

<div class="grid grid-flow-col border-t-2 border-orange-100 p-2">
  <div class="my-auto">{serving.Food.name}</div>
  <div class="my-auto justify-self-end">{serving.grams}g</div>
  <button
    class="justify-self-end rounded-full bg-red-500 p-2"
    on:click={() => deleteServing(serving.meal_id)}
    ><Icon width="20" icon="akar-icons:cross" />
  </button>
</div>
