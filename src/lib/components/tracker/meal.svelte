<script lang="ts">
	import { page } from '$app/stores'

	import Serving from '$lib/components/tracker/serving.svelte'
	import type { Food, Meal } from '@prisma/client'

	export let meal: string
	export let servings: (Meal & { food: Food })[]
	let addServingUrl: URL
	$: {
		addServingUrl = new URL('/scan', $page.url.origin)
		addServingUrl.searchParams.set('date', $page.params.date)
		addServingUrl.searchParams.set('meal', meal)
	}
</script>

<div class="border-1 grid rounded-md border-orange-500 border-opacity-50">
	<div>
		<div class="grid grid-flow-col p-2">
			<h2 class="my-auto">{meal}:</h2>
			<a
				href={addServingUrl.toString()}
				class="my-auto grid place-items-center place-self-end rounded-full"
				aria-label="Add {meal}">
				<icon class="i-akar-icons:plus color-orange-500 text-3xl" />
			</a>
		</div>
	</div>
	{#each servings as serving (serving.mealId)}
		<Serving {serving} />
	{/each}
</div>
