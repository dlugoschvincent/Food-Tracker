<script lang="ts">
	import type { PageData } from './$types'

	import { page } from '$app/stores'
	import Info from '$lib/components/info/info.svelte'
	import Tracker from '$lib/components/tracker/tracker.svelte'
	interface Props {
		data: PageData
	}

	let { data }: Props = $props()
</script>

<svelte:head>
	<title>What you ate on {$page.params.date}</title>
</svelte:head>

<Tracker servings={data.servings} />
<Info>
	Here you can see all the food you ate on {$page.params.date}. You can also switch between dates
	using the arrows next to the date. If you want to add some food that you ate just press the plus
	button.
</Info>
