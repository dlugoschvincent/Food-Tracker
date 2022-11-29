<script lang="ts">
	import type { PageData } from './$types'
	import Addorupdate from '$lib/components/product/addorupdate.svelte'
	export let data: PageData
</script>

<svelte:head>
	<title>Edit or eat</title>
</svelte:head>
{#if data.product}
	<Addorupdate product={data.product[0]} />
{:else}
	<Addorupdate />
{/if}
