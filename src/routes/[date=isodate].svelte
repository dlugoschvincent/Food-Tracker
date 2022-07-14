<script context="module" lang="ts">
  import type { Load } from './__types/[date=isodate]';
  import { supabase } from '$lib/supabaseclient';
  import { selectedDate } from '$lib/stores/dateStore';
  import Info from '$lib/components/info/info.svelte';
  export const load: Load = async ({ params }) => {
    const date = new Date(params.date);
    const { data: servings } = await supabase
      .from<definitions['UserAteFood'] & { Food: definitions['Food'] }>('UserAteFood')
      .select(`grams, meal_id, meal, Food(name)`)
      .gte('created_at', new Date(date.setHours(0, 0, 0, 0)).toISOString())
      .lte('created_at', new Date(date.setHours(23, 59, 59, 999)).toISOString());
    selectedDate.set(date);

    if (servings)
      return {
        props: {
          servings
        }
      };
    return {};
  };
</script>

<script lang="ts">
  import Tracker from '$lib/components/tracker/tracker.svelte';
  import type { definitions } from 'types/database';
  export let servings: (definitions['UserAteFood'] & { Food: definitions['Food'] })[];
</script>

<svelte:head>
  <title>What you ate on {$selectedDate.toDateString()}</title>
</svelte:head>

<Tracker {servings} />
<Info>
  Here you can see all the food you ate on {$selectedDate.toDateString()}. You can also switch
  between dates using the arrows next to the date. If you want to add some food that you ate just
  press the plus button.
</Info>
