<script lang="ts">
	import Datepicker from '$lib/components/tracker/datepicker.svelte'
	import MealComponent from '$lib/components/tracker/meal.svelte'
	import type { Food, Meal } from '@prisma/client'
	import Barcustom from './barcustom.svelte'
	export let servings: (Meal & { food: Food })[]

	let breakfastServings: typeof servings
	let lunchServings: typeof servings
	let dinnerServings: typeof servings

	$: if (servings != undefined) {
		breakfastServings = servings.filter(({ type }) => type === 'Breakfast')
		lunchServings = servings.filter(({ type }) => type === 'Lunch')
		dinnerServings = servings.filter(({ type }) => type === 'Dinner')
	}
</script>

<div class="grid grid-cols-1 gap-4">
	<Datepicker />
	<Barcustom {servings} />
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
