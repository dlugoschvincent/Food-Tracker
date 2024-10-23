<script lang="ts">
	import Datepicker from '$lib/components/tracker/datepicker.svelte'
	import MealComponent from '$lib/components/tracker/meal.svelte'
	import type { Food, Meal } from '@prisma/client'
	import Barcustom from './barcustom.svelte'
	interface Props {
		servings: (Meal & { food: Food })[]
	}

	let { servings }: Props = $props()

	let breakfastServings: typeof servings = $derived(
		servings.filter(({ type }) => type === 'Breakfast')
	)
	let lunchServings: typeof servings = $derived(servings.filter(({ type }) => type === 'Lunch'))
	let dinnerServings: typeof servings = $derived(servings.filter(({ type }) => type === 'Dinner'))

	let protein = $derived(
		Math.round(
			servings.map((x) => (x.grams / 100) * x.food.protein).reduce((x, y) => x + y, 0) * 10
		) / 10
	)
	let fat = $derived(
		Math.round(servings.map((x) => (x.grams / 100) * x.food.fat).reduce((x, y) => x + y, 0) * 10) /
			10
	)
	let carbohydrates = $derived(
		Math.round(
			servings.map((x) => (x.grams / 100) * x.food.carbohydrates).reduce((x, y) => x + y, 0) * 10
		) / 10
	)
</script>

<div class="grid grid-cols-1 gap-4">
	<Datepicker />
	<Barcustom
		{protein}
		{fat}
		{carbohydrates} />
	<MealComponent
		servings={breakfastServings}
		meal="Breakfast" />
	<MealComponent
		servings={lunchServings}
		meal="Lunch" />
	<MealComponent
		servings={dinnerServings}
		meal="Dinner" />
</div>
