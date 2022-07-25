<script lang="ts">
  import Datepicker from '$lib/components/tracker/datepicker.svelte';
  import Meal from '$lib/components/tracker/meal.svelte';
  import type { definitions } from 'types/database';
  import Bar from './bar.svelte';
  export let servings: (definitions['UserAteFood'] & { Food: definitions['Food'] })[];
  $: breakfastServings = servings.filter(({ meal }) => meal === 'Breakfast');
  $: lunchServings = servings.filter(({ meal }) => meal === 'Lunch');
  $: dinnerServings = servings.filter(({ meal }) => meal === 'Dinner');
</script>

<div class="grid gap-4">
  <Datepicker />
  <Bar {servings} />
  <Meal servings={breakfastServings} meal="Breakfast" />
  <Meal servings={lunchServings} meal="Lunch" />
  <Meal servings={dinnerServings} meal="Dinner" />
</div>
