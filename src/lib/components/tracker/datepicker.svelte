<script lang="ts">
	import { navigating, page } from '$app/stores'
	import { selectedDate } from '$lib/stores/dateStore'
	import {} from 'svelte/animate'
	$: selectedDateClone = new Date($selectedDate)
	$: prevDate = new Date(new Date(selectedDateClone).setDate(selectedDateClone.getDate() - 1))
	$: nextDate = new Date(new Date(selectedDateClone).setDate(selectedDateClone.getDate() + 1))
	$: dateIsInFuture = $page.params.date >= new Date().toISOString().slice(0, 10)
</script>

<div class="border-transparent rounded-md border-2 grid grid-flow-col p-2 justify-between">
	<a
		data-sveltekit-preload-data="hover"
		href="/{prevDate.toISOString().slice(0, 10)}"
		class:disable-anchor={$navigating}
		class="rounded-full grid place-items-center"
		aria-label="Previous date">
		<icon class="text-3xl i-akar-icons:arrow-left text-orange-500" />
	</a>

	{#if !$navigating}
		<div class="text-xl animate-zoom-in animate-duration-200 place-self-center">
			{$selectedDate.toDateString()}
		</div>
	{:else}
		<icon class="animate-spin text-3xl i-quill:loading-spin place-self-center text-orange-500" />
	{/if}
	<a
		data-sveltekit-preload-data="hover"
		href="/{nextDate.toISOString().slice(0, 10)}"
		class:disable-anchor={$navigating || dateIsInFuture}
		class="rounded-full grid place-items-center"
		aria-label="Next date">
		<icon class="text-3xl i-akar-icons:arrow-right text-orange-500" />
	</a>
</div>
