<script lang="ts">
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'

	onMount(() => {
		goto(`/tracker/${new Date().toISOString().slice(0, 10)}`)
	})
</script>

<svelte:head>
	<title>Food Tracker Homepage</title>
</svelte:head>
