<script lang="ts">
	import type { PageData } from './$types'

	import { page } from '$app/stores'
	import Info from '$lib/components/info/info.svelte'
	import Tracker from '$lib/components/tracker/tracker.svelte'
	import { selectedDate } from '$lib/stores/dateStore'
	export let data: PageData

	$: {
		selectedDate.set(new Date($page.params.date))
	}
</script>

<svelte:head>
	<title>What you ate on {$selectedDate.toDateString()}</title>
</svelte:head>

<Tracker servings={data.servings} />
<Info>
	Here you can see all the food you ate on {$selectedDate.toDateString()}. You can also switch
	between dates using the arrows next to the date. If you want to add some food that you ate just
	press the plus button.
</Info>
