<script lang="ts">
	import Datepicker from '$lib/components/tracker/datepicker.svelte'
	import Meal from '$lib/components/tracker/meal.svelte'
	import type { Database } from 'types/database/database.types'
	import Barcustom from './barcustom.svelte'
	export let servings: Database['public']['Tables']['UserAteFood']['Row'][]
	let breakfastServings: typeof servings
	let lunchServings
	let dinnerServings

	$: if (servings != undefined) {
		breakfastServings = servings.filter(({ meal }) => meal === 'Breakfast')
		lunchServings = servings.filter(({ meal }) => meal === 'Lunch')
		dinnerServings = servings.filter(({ meal }) => meal === 'Dinner')
	}
</script>

<div class="grid grid-cols-1 gap-4">
	<Datepicker />
	<Barcustom {servings} />
	<Meal
		servings={breakfastServings}
		meal="Breakfast" />
	<Meal
		servings={lunchServings}
		meal="Lunch" />
	<Meal
		servings={dinnerServings}
		meal="Dinner" />
</div>
