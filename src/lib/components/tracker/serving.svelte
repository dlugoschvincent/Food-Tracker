<script lang="ts">
	import { navigating } from '$app/stores'
	import type { Food, Meal } from '@prisma/client'
	import Delete from './delete.svelte'

	import { slide } from 'svelte/transition'
	interface Props {
		serving: Meal & { food: Food }
	}

	let { serving }: Props = $props()

	let deleted: boolean = $state(false)
</script>

{#if !deleted && !$navigating}
	<div
		transition:slide|global={{ duration: 200 }}
		class="border-t-1 grid grid-flow-col border-orange-500 border-opacity-50 p-2">
		<div class="my-auto">{serving.food.name}</div>
		<div class="my-auto justify-self-end">{serving.grams}g</div>
		<Delete
			id={serving.mealId}
			bind:deleted />
	</div>
{/if}
