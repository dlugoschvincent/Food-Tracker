<script lang="ts">
	import { enhance } from '$app/forms'

	import { page } from '$app/stores'
	import type { Food } from '@prisma/client'
	let product: Food = $state({
		barCode: BigInt($page.params.barcode),
		name: '',
		fat: 0,
		protein: 0,
		carbohydrates: 0,
		saturatedFat: 0,
		fibre: 0,
		salt: 0,
		sugar: 0,
		createdAt: null
	})

	let kiloJoules: number = $derived.by(() => {
		return Math.round(product.protein * 16.7 + product.carbohydrates * 16.7 + product.fat * 37.7)
	})
</script>

<form
	use:enhance
	method="post"
	action="?/create">
	<fieldset class="grid auto-cols-fr gap-8">
		<div class="col-span-1">
			<label
				for="name"
				class="mb-2 block text-sm font-medium text-zinc-900 dark:text-white">Name</label>
			<input
				id="name"
				class="input-text"
				placeholder="Name"
				bind:value={product.name}
				type="text"
				required
				name="name" />
		</div>
		<button
			aria-label="Save item"
			class="col-span-1 cursor-pointer place-self-end rounded-full bg-orange-500 p-2"
			type="submit">
			<div class="i-bx:save text-xl"></div>
		</button>

		<div class="col-span-2">Nutrients per 100 gram:</div>

		<div>
			<label
				for="fat"
				class="mb-2 block text-sm font-medium text-zinc-900 dark:text-white">Fat</label>
			<input
				id="fat"
				class="input-text"
				placeholder="Fat"
				bind:value={product.fat}
				type="number"
				required
				min="0"
				max={100 - product.protein - product.carbohydrates}
				step="0.1"
				name="fat" />
		</div>

		<div>
			<label
				for="protein"
				class="mb-2 block text-sm font-medium text-zinc-900 dark:text-white">Protein</label>
			<input
				id="protein"
				class="input-text"
				placeholder="Protein"
				bind:value={product.protein}
				type="number"
				required
				min="0"
				max={100 - product.fat - product.carbohydrates}
				step="0.1"
				name="protein" />
		</div>
		<div>
			<label
				for="carbohydrates"
				class="mb-2 block text-sm font-medium text-zinc-900 dark:text-white">Carbohydrates</label>
			<input
				id="carbohydrates"
				class="input-text"
				placeholder="Carbohydrates"
				bind:value={product.carbohydrates}
				type="number"
				required
				min="0"
				max={100 - product.fat - product.protein}
				step="0.1"
				name="carbohydrates" />
		</div>
		<div>
			<label
				for="kilojoules"
				class="mb-2 block text-sm font-medium text-zinc-900 dark:text-white">Kilojoules</label>
			<input
				id="kilojoules"
				class="input-text"
				disabled
				placeholder="Kilojoules"
				value={kiloJoules}
				type="number"
				required
				min="0"
				max={Math.floor(37.7 * 100)}
				step="0.1"
				name="kilojoules" />
		</div>
	</fieldset>
</form>
