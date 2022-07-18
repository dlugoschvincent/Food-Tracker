<script lang="ts">
  import type { definitions } from 'types/database';
  import Addorupdate from '$lib/components/product/addorupdate.svelte';
  export let product: definitions['Food'][];
</script>

<svelte:head>
  <title>Edit or eat</title>
</svelte:head>
{#if product.length === 0}
  <Addorupdate />
{:else}
  <Addorupdate product={product[0]} />
{/if}
