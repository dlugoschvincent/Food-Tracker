<script lang="ts">
	import { navigating, page } from '$app/stores'
	import { selectedDate } from '$lib/stores/dateStore'
	import {} from 'svelte/animate'
	$: selectedDateClone = new Date($selectedDate)
	$: prevDate = new Date(new Date(selectedDateClone).setDate(selectedDateClone.getDate() - 1))
	$: nextDate = new Date(new Date(selectedDateClone).setDate(selectedDateClone.getDate() + 1))
	$: dateIsInFuture = $page.params.date >= new Date().toISOString().slice(0, 10)
</script>

<div class="grid grid-flow-col justify-between rounded-md border-2 border-transparent p-2">
	<a
		data-sveltekit-preload-data="hover"
		href="/tracker/{prevDate.toISOString().slice(0, 10)}"
		class:disable-anchor={$navigating}
		class="grid place-items-center rounded-full"
		aria-label="Previous date">
		<icon class="i-akar-icons:arrow-left text-3xl text-orange-500" />
	</a>

	{#if !$navigating}
		<div class="animate-zoom-in animate-duration-200 place-self-center text-xl">
			{$selectedDate.toDateString()}
		</div>
	{:else}
		<icon class="i-quill:loading-spin animate-spin place-self-center text-3xl text-orange-500" />
	{/if}
	<a
		data-sveltekit-preload-data="hover"
		href="/tracker/{nextDate.toISOString().slice(0, 10)}"
		class:disable-anchor={$navigating || dateIsInFuture}
		class="grid place-items-center rounded-full"
		aria-label="Next date">
		<icon class="i-akar-icons:arrow-right text-3xl text-orange-500" />
	</a>
</div>
