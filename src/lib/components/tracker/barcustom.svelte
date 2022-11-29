<script lang="ts">
	import type { Database } from 'types/database/database.types'

	import { slide } from 'svelte/transition'
	import { navigating } from '$app/stores'
	export let servings:
		| (Database['public']['Tables']['UserAteFood']['Row'] & {
				Food: Database['public']['Tables']['Food']['Row']
		  })[]
		| undefined

	let protein = 0
	let fat = 0
	let carbohydrates = 0
	$: {
		if (servings != undefined) {
			protein =
				Math.round(
					servings.map((x) => (x.grams / 100) * x.Food.protein).reduce((x, y) => x + y, 0) * 10
				) / 10
			fat =
				Math.round(
					servings.map((x) => (x.grams / 100) * x.Food.fat).reduce((x, y) => x + y, 0) * 10
				) / 10
			carbohydrates =
				Math.round(
					servings.map((x) => (x.grams / 100) * x.Food.carbohydrates).reduce((x, y) => x + y, 0) *
						10
				) / 10
		}
	}
</script>

{#if protein + fat + carbohydrates > 0 && !$navigating}
	<div
		transition:slide={{ duration: 200 }}
		class="flex flex-col gap-4">
		<div class="animate-slideInLeft flex h-6 w-full overflow-hidden rounded-md">
			<div
				style="flex-basis:{Math.round((fat / (fat + protein + carbohydrates)) * 100)}%"
				class="basis-{Math.round(
					(fat / (fat + protein + carbohydrates)) * 100
				)}% h-6 bg-yellow-500" />
			<div
				style="flex-basis:{Math.round((protein / (fat + protein + carbohydrates)) * 100)}%"
				class="basis-{Math.round(
					(protein / (fat + protein + carbohydrates)) * 100
				)}% h-full bg-red-500" />
			<div
				style="flex-basis:{Math.round((carbohydrates / (fat + protein + carbohydrates)) * 100)}%"
				class="basis-{Math.round(
					(carbohydrates / (fat + protein + carbohydrates)) * 100
				)}% h-full bg-blue-500" />
		</div>
		<div class="flex w-full justify-between gap-4 sm:justify-start">
			<div class="flex gap-2">
				<div class="my-auto h-2 w-2 bg-yellow-500" />
				<div>{fat}g Fat</div>
			</div>
			<div class="flex gap-2">
				<div class="my-auto h-2 w-2 bg-red-500" />
				<div>{protein}g Protein</div>
			</div>
			<div class="flex gap-2">
				<div class="my-auto h-2 w-2 bg-blue-500" />
				<div>{carbohydrates}g Carbs</div>
			</div>
		</div>
	</div>
{/if}
