<script lang="ts">
	import { slide } from 'svelte/transition'
	import { navigating } from '$app/stores'
	import Delete from './delete.svelte'
	import type { Database } from 'types/database/database.types'

	export let serving:
		| (Database['public']['Tables']['UserAteFood']['Row'] & {
				Food: Database['public']['Tables']['Food']['Row']
		  })
		| undefined

	let deleted: boolean = false
</script>

{#if !deleted && !$navigating}
	<div
		transition:slide={{ duration: 200 }}
		class="border-t-1 grid grid-flow-col p-2 border-orange-500 border-opacity-50">
		<div class="my-auto">{serving?.Food.name}</div>
		<div class="my-auto justify-self-end">{serving?.grams}g</div>
		<Delete
			id={serving?.meal_id}
			name={serving?.Food.name}
			bind:deleted />
	</div>
{/if}
