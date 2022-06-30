<script lang="ts">
  import type { definitions } from 'types/database';
  import Editproduct from '$lib/components/editproduct.svelte';
  export let product: definitions['Food'];
</script>

<Editproduct {product} />
