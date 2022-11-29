<script lang="ts">
	import { page } from '$app/stores'
	let edit = false
	export let product = {
		bar_code: parseInt($page.params.product),
		name: '',
		fat: 0,
		protein: 0,
		carbohydrates: 0,
		saturated_fat: 0,
		fibre: 0,
		salt: 0,
		sugar: 0
	}
	$: kiloJoules = Math.round(
		product.protein * 16.7 + product.carbohydrates * 16.7 + product.fat * 37.7
	)
	function toggleEdit() {
		edit = !edit
	}
</script>

<form
	method="post"
	action="?/add">
	<fieldset
		class:children:opacity-50={!edit}
		class="auto-cols-fr grid gap-8"
		disabled={!edit}>
		<input
			disabled
			hidden
			placeholder="Barcode"
			bind:value={product.bar_code}
			type="text"
			required
			name="bar_code" />
		<div class="col-span-1">
			<input
				placeholder="Name"
				bind:value={product.name}
				type="text"
				required
				name="name" />
		</div>
		{#if edit}
			<button
				class="rounded-full cursor-pointer bg-orange-500 p-2 col-span-1 place-self-end"
				type="submit">
				<div class="text-xl i-bx:save" />
			</button>
		{:else}
			<div
				class="rounded-full cursor-pointer bg-orange-500 p-2 col-span-1 place-self-end !opacity-100"
				on:click={toggleEdit}
				on:keypress={toggleEdit}>
				<div class="text-xl i-akar-icons:edit" />
			</div>
		{/if}

		<div class="col-span-2">Nutrients per 100 gram:</div>

		<input
			placeholder="Fat"
			bind:value={product.fat}
			type="number"
			required
			min="0"
			max={100 - product.protein - product.carbohydrates}
			step="0.1"
			name="fat" />
		<input
			placeholder="Protein"
			bind:value={product.protein}
			type="number"
			required
			min="0"
			max={100 - product.fat - product.carbohydrates}
			step="0.1"
			name="protein" />
		<input
			placeholder="Carbohydrates"
			bind:value={product.carbohydrates}
			type="number"
			required
			min="0"
			max={100 - product.fat - product.protein}
			step="0.1"
			name="carbohydrates" />
		<input
			disabled
			placeholder="Kilojoules"
			bind:value={kiloJoules}
			type="number"
			required
			min="0"
			max={Math.floor(37.7 * 100)}
			step="0.1"
			name="kilojoules" />
	</fieldset>
</form>
<form
	method="post"
	action="?/eat"
	class="grid gap-4">
	<div class="col-span-6">How much did you eat?</div>
	<input
		hidden
		value={$page.params.product}
		name="bar_code" />
	<input
		hidden
		value={$page.params.meal}
		name="meal" />
	<div class="col-span-5">
		<input
			step="0.1"
			type="number"
			name="grams"
			placeholder="Grams" />
	</div>
	<button
		type="submit"
		class="rounded-md border-2 border-orange-500 p-2 col-span-1">Eat</button>
</form>
