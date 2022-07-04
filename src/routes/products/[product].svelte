<script lang="ts">
  import type { definitions } from 'types/database';
  import Editproduct from '$lib/components/editproduct.svelte';

  export let product: definitions['Food'];
</script>

<svelte:head>
  <title>Edit or eat {product.name}</title>
</svelte:head>
<Editproduct {product} />
