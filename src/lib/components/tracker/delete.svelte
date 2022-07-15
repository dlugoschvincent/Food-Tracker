<script lang="ts">
  import { supabaseClient } from '$lib/supabaseclient';
  import type { definitions } from 'types/database';

  export let id: number;
  export let name: string;
  export let deleted = false;

  async function deleteServing() {
    deleted = true;
    fetch('/')
    await supabaseClient
      .from<definitions['UserAteFood'] & { Food: definitions['Food'] }>('UserAteFood')
      .delete()
      .eq('meal_id', id);
  }
</script>
<button
  aria-label="Delete {name}"
  class="rounded-full bg-red-500 grid p-2 text-light-200 place-items-center justify-self-end dark:bg-red-700"
  on:click={deleteServing}
  ><div class="text-xl i-akar-icons:cross" />
</button>
