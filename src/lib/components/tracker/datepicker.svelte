<script lang="ts">
	import { navigating, page } from '$app/stores'
	import {} from 'svelte/animate'

	let prevDateIsoString: string = $derived.by(() => {
		// Calculate previous date
		let prevDate = new Date($page.params.date)
		prevDate.setDate(prevDate.getDate() - 1)
		return prevDate.toISOString().slice(0, 10)
	})

	let nextDateIsoString: string = $derived.by(() => {
		// Calculate next date
		let nextDate = new Date($page.params.date)
		nextDate.setDate(nextDate.getDate() + 1)
		return nextDate.toISOString().slice(0, 10)
	})

	let dateIsInFuture = $derived($page.params.date >= new Date().toISOString().slice(0, 10))
</script>

<div class="flex justify-between rounded-md border-2 border-transparent p-2">
	<a
		data-sveltekit-preload-data="hover"
		href="/tracker/{prevDateIsoString}"
		class:disable-anchor={$navigating}
		class="grid place-items-center rounded-full"
		aria-label="Previous date">
		<icon class="i-akar-icons:arrow-left text-orange-500"></icon>
	</a>

	{#if !$navigating}
		<div class="animate-zoom-in animate-duration-200 place-self-center text-xl">
			{$page.params.date}
		</div>
	{:else}
		<icon class="i-quill:loading-spin animate-spin place-self-center text-orange-500"></icon>
	{/if}
	<a
		data-sveltekit-preload-data="hover"
		href="/tracker/{nextDateIsoString}"
		class:disable-anchor={$navigating || dateIsInFuture}
		class="grid place-items-center rounded-full"
		aria-label="Next date">
		<icon class="i-akar-icons:arrow-right text-orange-500"></icon>
	</a>
</div>
