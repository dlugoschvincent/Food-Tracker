<script lang="ts">
  import type { definitions } from 'types/database';
  import Addorupdate from '$lib/components/product/addorupdate.svelte';
  export let product: definitions['Food'][];
  export let exists: boolean;
  console.log(exists);
</script>

<svelte:head>
  <title>Edit or eat</title>
</svelte:head>
{#if product.length === 0}
  <Addorupdate />
{:else}
  <Addorupdate product={product[0]} />
{/if}
