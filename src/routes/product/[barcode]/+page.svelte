<script lang="ts">
	import type { PageData } from './$types'
	import Barcustom from '$lib/components/tracker/barcustom.svelte'
	import { page } from '$app/stores'
	import { enhance } from '$app/forms'
	interface Props {
		data: PageData
	}

	let { data }: Props = $props()
	let meal = $page.url.searchParams.get('meal')
	let date = $page.url.searchParams.get('date')
</script>

<div class="flex flex-1 flex-col gap-4">
	<h1 class="text-xl">{data.product.name}</h1>
	<div>Barcode: {data.product.barCode}</div>
	<div>
		<div class="text-lg">Nutrients per 100 grams</div>
		<Barcustom
			protein={data.product.protein}
			fat={data.product.fat}
			carbohydrates={data.product.carbohydrates} />
	</div>
	<!-- This is a delete button only for debug purposes now -->
	<!-- <form -->
	<!-- 	use:enhance -->
	<!-- 	method="post" -->
	<!-- 	action="?/delete"> -->
	<!-- 	<input -->
	<!-- 		hidden -->
	<!-- 		name="barcode" -->
	<!-- 		value={data.product.barCode} /> -->
	<!-- 	<button -->
	<!-- 		type="submit" -->
	<!-- 		aria-label="Delete {data.product.name}" -->
	<!-- 		class="i-akar-icons:cross color-red-500 text-3xl" /> -->
	<!-- </form> -->
</div>
{#if meal && date}
	<form
		use:enhance
		method="post"
		action="?/eat"
		class="flex flex-none flex-col gap-4">
		<div class="col-span-6 text-lg">How much did you eat in grams?</div>
		<div class="col-span-6">
			<input
				class="input-text"
				name="grams"
				type="number"
				step="0.1"
				id="name"
				required
				placeholder="Grams" />
		</div>

		<input
			hidden
			value={meal}
			name="meal" />
		<input
			hidden
			value={date}
			name="date" />
		<button
			type="submit"
			class="col-span-6 w-full rounded-md border-2 border-orange-500 p-2 sm:max-w-xs"
			>Add to {meal} on {date}</button>
	</form>
{/if}
