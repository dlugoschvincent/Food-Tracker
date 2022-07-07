<script lang="ts">
  import Serving from '$lib/components/tracker/serving.svelte';

  import type { definitions } from 'types/database';

  export let meal: string;
  export let servings: (definitions['UserAteFood'] & { Food: definitions['Food'] })[];
</script>

<div class="grid rounded-md border-2 border-orange-200">
  <div>
    <div class="grid grid-flow-col border-orange-100 p-2">
      <h2 class="my-auto">{meal}:</h2>
      <a
        href="./scan?meal={meal}"
        class="my-auto grid place-items-center justify-self-end rounded-full bg-orange-300 p-2"
        aria-label="Add {meal}">
        <div class="i-akar-icons:plus text-xl"></div>
      </a>
    </div>
  </div>
  {#if servings}
    {#each servings as serving}
      <Serving {serving} />
    {/each}
  {/if}
</div>
