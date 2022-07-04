<script lang="ts">
  import Datepicker from '$lib/components/tracker/datepicker.svelte';
  import Meal from '$lib/components/tracker/meal.svelte';
  import type { definitions } from 'types/database';
  // import { groupBy } from 'lodash-es';
  export let servings: (definitions['UserAteFood'] & { Food: definitions['Food'] })[];

  // $: groupedServings = groupBy(servings, 'meal');
  $: breakfastServings = servings.filter(({ meal }) => meal === 'Breakfast');
  $: lunchServings = servings.filter(({ meal }) => meal === 'Lunch');
  $: dinnerServings = servings.filter(({ meal }) => meal === 'Dinner');
</script>

<div class="grid gap-4">
  <Datepicker />
  <Meal servings={breakfastServings} meal="Breakfast" />
  <Meal servings={lunchServings} meal="Lunch" />
  <Meal servings={dinnerServings} meal="Dinner" />
</div>
