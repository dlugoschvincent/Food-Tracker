<script lang="ts">
	import { navigating } from '$app/stores'
	import type { Food, Meal } from '@prisma/client'
	import { slide } from 'svelte/transition'
	export let servings: (Meal & { food: Food })[]

	let protein = 0
	let fat = 0
	let carbohydrates = 0
	$: {
		if (servings != undefined) {
			protein =
				Math.round(
					servings.map((x) => (x.grams / 100) * x.food.protein).reduce((x, y) => x + y, 0) * 10
				) / 10
			fat =
				Math.round(
					servings.map((x) => (x.grams / 100) * x.food.fat).reduce((x, y) => x + y, 0) * 10
				) / 10
			carbohydrates =
				Math.round(
					servings.map((x) => (x.grams / 100) * x.food.carbohydrates).reduce((x, y) => x + y, 0) *
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
				style="flex-basis:{(fat / (fat + protein + carbohydrates)) * 100}%"
				class="h-6 bg-yellow-500" />
			<div
				style="flex-basis:{(protein / (fat + protein + carbohydrates)) * 100}%"
				class="h-full bg-red-500" />
			<div
				style="flex-basis:{(carbohydrates / (fat + protein + carbohydrates)) * 100}%"
				class="h-full bg-blue-500" />
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
