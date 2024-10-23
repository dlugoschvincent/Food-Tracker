<script lang="ts">
	import { slide } from 'svelte/transition'

	interface Props {
		protein: number
		fat: number
		carbohydrates: number
	}

	let { protein = 0, fat = 0, carbohydrates = 0 }: Props = $props()
</script>

<div
	transition:slide={{ duration: 200 }}
	class="flex flex-col gap-4">
	<div class="animate-slideInLeft flex h-6 w-full flex-row overflow-hidden rounded-md">
		{#if fat > 0}
			<div
				style="flex-basis:{(fat / (fat + protein + carbohydrates)) * 100}%"
				class="h-6 bg-yellow-500">
			</div>
		{/if}
		{#if protein > 0}
			<div
				style="flex-basis:{(protein / (fat + protein + carbohydrates)) * 100}%"
				class="h-full bg-red-500">
			</div>
		{/if}
		{#if carbohydrates > 0}
			<div
				style="flex-basis:{(carbohydrates / (fat + protein + carbohydrates)) * 100}%"
				class="h-full bg-blue-500">
			</div>
		{/if}

		{#if protein + fat + carbohydrates == 0}
			<div
				style="flex-basis: 100%"
				class="h-full bg-slate-500">
			</div>
		{/if}
	</div>
	<div class="flex w-full flex-row justify-between gap-4 sm:justify-start">
		<div class="flex gap-2">
			<div class="my-auto h-2 w-2 bg-yellow-500"></div>
			<div>{fat}g Fat</div>
		</div>
		<div class="flex gap-2">
			<div class="my-auto h-2 w-2 bg-red-500"></div>
			<div>{protein}g Protein</div>
		</div>
		<div class="flex gap-2">
			<div class="my-auto h-2 w-2 bg-blue-500"></div>
			<div>{carbohydrates}g Carbs</div>
		</div>
	</div>
</div>
