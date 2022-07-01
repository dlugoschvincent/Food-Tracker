<script context="module" lang="ts">
  import type { Load } from './__types/[date]';
  import { supabase } from '$lib/supabaseclient';
  import { navigating } from '$app/stores';
  import { fade } from 'svelte/transition';

  export const load: Load = async ({ params }) => {
    if (isNaN(parseInt(params.date))) return {};
    const date = new Date(parseInt(params.date));
    const { data: servings } = await supabase
      .from<definitions['UserAteFood'] & { Food: definitions['Food'] }>('UserAteFood')
      .select(`grams, meal_id, meal, Food(name)`)
      .gte('created_at', new Date(date.setHours(0, 0, 0, 0)).toISOString())
      .lte('created_at', new Date(date.setHours(23, 59, 59, 999)).toISOString());
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

{#if $navigating}
  <div>Waiting</div>
{:else}
  <Tracker {servings} />
{/if}
