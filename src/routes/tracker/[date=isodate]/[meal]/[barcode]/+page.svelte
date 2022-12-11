<script lang="ts">
	import { enhance } from '$app/forms'

	import { page } from '$app/stores'
	import type { PageData } from './$types'
	export let data: PageData
</script>

<svelte:head>
	<title>Edit or eat</title>
</svelte:head>

<h1 class="text-xl">{data.product.name}</h1>

<form
	use:enhance
	method="post"
	action="?/eat"
	class="grid gap-4">
	<div class="col-span-6">How much did you eat?</div>

	<div class="col-span-6">
		<label
			for="grams"
			class="mb-2 block text-sm font-medium text-zinc-900 dark:text-white">Grams</label>
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
		value={$page.params.meal}
		name="meal" />
	<button
		type="submit"
		class="col-span-6 w-full place-self-center rounded-md border-2 border-orange-500 p-2 sm:max-w-xs"
		>Eat</button>
</form>
