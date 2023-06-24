<script lang="ts">
	import { navigating, page } from '$app/stores'
	import {} from 'svelte/animate'
	let prevDateIsoString: string
	let nextDateIsoString: string

	$: if ($page.params.date) {
		let selectedDate = new Date($page.params.date)
		selectedDate.setDate(selectedDate.getDate() - 1)
		prevDateIsoString = selectedDate.toISOString().slice(0, 10)

		selectedDate.setDate(selectedDate.getDate() + 2)
		nextDateIsoString = selectedDate.toISOString().slice(0, 10)
	}
	$: dateIsInFuture = $page.params.date >= new Date().toISOString().slice(0, 10)
</script>

<div class="grid grid-flow-col justify-between rounded-md border-2 border-transparent p-2">
	<a
		data-sveltekit-preload-data="hover"
		href="/tracker/{prevDateIsoString}"
		class:disable-anchor={$navigating}
		class="grid place-items-center rounded-full"
		aria-label="Previous date">
		<icon class="i-akar-icons:arrow-left text-3xl text-orange-500" />
	</a>

	{#if !$navigating}
		<div class="animate-zoom-in animate-duration-200 place-self-center text-xl">
			{$page.params.date}
		</div>
	{:else}
		<icon class="i-quill:loading-spin animate-spin place-self-center text-3xl text-orange-500" />
	{/if}
	<a
		data-sveltekit-preload-data="hover"
		href="/tracker/{nextDateIsoString}"
		class:disable-anchor={$navigating || dateIsInFuture}
		class="grid place-items-center rounded-full"
		aria-label="Next date">
		<icon class="i-akar-icons:arrow-right text-3xl text-orange-500" />
	</a>
</div>
