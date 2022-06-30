<script lang="ts">
  import { supabase } from '$lib/supabaseclient';

  import type { definitions } from 'types/database';

  let searchQuery: string;

  async function search() {
    console.log('Query: ' + searchQuery);
    const { data, error } = await supabase
      .from<definitions['Food']>('Food')
      .select()
      .textSearch('name', searchQuery);
    console.log(data);
  }
</script>

<div class="col-span-2 grid gap-4">
  <form on:submit|preventDefault={search} class="grid gap-4">
    <input
      class="rounded-md border-2 border-orange-100 p-2 outline-orange-300"
      type="text"
      placeholder="Search"
      bind:value={searchQuery} />
    <button type="submit" class="rounded-md border-2 border-orange-100 bg-orange-300 p-2"
      >Search</button>
  </form>
</div>
