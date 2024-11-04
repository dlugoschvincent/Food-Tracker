<script lang="ts">
	import { page } from '$app/stores'

	import Serving from '$lib/components/tracker/serving.svelte'
	import type { Food, Meal } from '@prisma/client'

	interface Props {
		meal: string
		servings: (Meal & { food: Food })[]
	}

	let { meal, servings }: Props = $props()
	let addServingUrl: URL = $derived.by(() => {
		let url = new URL('/scan', $page.url.origin)
		url.searchParams.set('date', $page.params.date)
		url.searchParams.set('meal', meal)
		return url
	})
</script>

<div class="border-1 grid rounded-md border-orange-500 border-opacity-50">
	<div>
		<div class="flex justify-between p-2">
			<h2 class="my-auto">{meal}:</h2>
			<a
				href={addServingUrl.toString()}
				class="my-auto grid place-items-center place-self-end rounded-full"
				aria-label="Add {meal}">
				<icon class="i-octicon:plus-16 color-orange-500"></icon>
			</a>
		</div>
	</div>
	{#each servings as serving (serving.mealId)}
		<Serving {serving} />
	{/each}
</div>
