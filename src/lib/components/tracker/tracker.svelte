<script lang="ts">
  import Datepicker from '$lib/components/tracker/datepicker.svelte';
  import Meal from '$lib/components/tracker/meal.svelte';
  import type { definitions } from 'types/database';
  import {groupBy} from 'lodash-es';
  export let servings: (definitions['UserAteFood'] & { Food: definitions['Food'] })[];

  $: groupedServings = groupBy(servings, 'meal');
</script>

<div class="grid gap-4">
  <Datepicker />
  <Meal servings={groupedServings.Breakfast} meal="Breakfast" />
  <Meal servings={groupedServings.Lunch} meal="Lunch" />
  <Meal servings={groupedServings.Dinner} meal="Dinner" />
</div>
