<script lang="ts">
  import Serving from '$lib/components/tracker/serving.svelte';

  import type { definitions } from 'types/database';

  export let meal: string;
  export let servings: (definitions['UserAteFood'] & { Food: definitions['Food'] })[];
</script>

<div class="rounded-md border-2 border-orange-200 grid dark:border-orange-400">
  <div>
    <div class="grid grid-flow-col p-2">
      <h2 class="my-auto">{meal}:</h2>
      <a
        href="./scan?meal={meal}"
        class="rounded-full my-auto bg-orange-300 grid p-2 place-items-center justify-self-end dark:bg-orange-500"
        aria-label="Add {meal}">
        <icon class="text-xl i-akar-icons:plus" />
      </a>
    </div>
  </div>
  {#if servings}
    {#each servings as serving}
      <Serving {serving} />
    {/each}
  {/if}
</div>
