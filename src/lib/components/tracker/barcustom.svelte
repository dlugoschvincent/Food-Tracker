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

{#if protein + fat + carbohydrates > 0 && !$navigating }
  <div transition:slide={{ duration: 200}} class="flex flex-col gap-4">
    <div class="w-full h-6 rounded-md flex overflow-hidden animate-slideInLeft">
      <div
        style="flex-basis:{Math.round((fat / (fat + protein + carbohydrates)) * 100)}%"
        class="basis-{Math.round(
          (fat / (fat + protein + carbohydrates)) * 100
        )}% bg-yellow-500 h-6" />
      <div
        style="flex-basis:{Math.round((protein / (fat + protein + carbohydrates)) * 100)}%"
        class="basis-{Math.round(
          (protein / (fat + protein + carbohydrates)) * 100
        )}% bg-red-500 h-full" />
      <div
        style="flex-basis:{Math.round((carbohydrates / (fat + protein + carbohydrates)) * 100)}%"
        class="basis-{Math.round(
          (carbohydrates / (fat + protein + carbohydrates)) * 100
        )}% bg-blue-500 h-full" />
    </div>
    <div
      class="flex w-full justify-between sm:justify-start gap-4">
      <div class="flex gap-2">
        <div class="bg-yellow-500 w-2 h-2 my-auto" />
        <div>{fat}g Fat</div>
      </div>
      <div class="flex gap-2">
        <div class="bg-red-500 w-2 h-2 my-auto" />
        <div>{protein}g Protein</div>
      </div>
      <div class="flex gap-2">
        <div class="bg-blue-500 w-2 h-2 my-auto" />
        <div>{carbohydrates}g Carbs</div>
      </div>
    </div>
  </div>
{/if}
