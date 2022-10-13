<script lang="ts">
  import Datepicker from '$lib/components/tracker/datepicker.svelte'
  import Meal from '$lib/components/tracker/meal.svelte'
  import type { Database } from 'types/database/database.types'
  import Barcustom from './barcustom.svelte'
  export let servings:
    | (Database['public']['Tables']['UserAteFood']['Row'] & {
        Food: Database['public']['Tables']['Food']['Row']
      })[]
    | undefined
  let breakfastServings:
    | (Database['public']['Tables']['UserAteFood']['Row'] & {
        Food: Database['public']['Tables']['Food']['Row']
      })[]
    | undefined
  let lunchServings:
    | (Database['public']['Tables']['UserAteFood']['Row'] & {
        Food: Database['public']['Tables']['Food']['Row']
      })[]
    | undefined
  let dinnerServings:
    | (Database['public']['Tables']['UserAteFood']['Row'] & {
        Food: Database['public']['Tables']['Food']['Row']
      })[]
    | undefined
  $: if (servings != undefined) {
    breakfastServings = servings.filter(({ meal }) => meal === 'Breakfast')
    lunchServings = servings.filter(({ meal }) => meal === 'Lunch')
    dinnerServings = servings.filter(({ meal }) => meal === 'Dinner')
  }
</script>

<div class="grid gap-4 grid-cols-1">
  <Datepicker />
  <Barcustom {servings} />
  <Meal servings={breakfastServings} meal="Breakfast" />
  <Meal servings={lunchServings} meal="Lunch" />
  <Meal servings={dinnerServings} meal="Dinner" />
</div>
