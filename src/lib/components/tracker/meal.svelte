<script lang="ts">
import { page } from '$app/stores';

  import Serving from '$lib/components/tracker/serving.svelte';

  import type { definitions } from 'types/database';

  export let meal: string;
  export let servings: (definitions['UserAteFood'] & { Food: definitions['Food'] })[];
</script>

<div class="rounded-md border-1 border-opacity-50 grid border-orange-500">
  <div>
    <div class="grid grid-flow-col p-2">
      <h2 class="my-auto">{meal}:</h2>
      <a
        href="{$page.url.pathname}/{meal}/scan"
        class="rounded-full my-auto grid place-items-center place-self-end"
        aria-label="Add {meal}">
        <icon class="text-3xl i-akar-icons:plus color-orange-500" />
      </a>
    </div>
  </div>
  {#if servings}
    {#each servings as serving}
      <Serving {serving} />
    {/each}
  {/if}
</div>
