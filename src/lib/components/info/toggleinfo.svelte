<script lang="ts">
	import { info } from '$lib/stores/infoStore.svelte'
	function toggleInfo() {
		info.toggleInfo()
	}
</script>

<div
	class="i-akar-icons:info cursor-pointer place-self-center text-2xl text-green-500 opacity-50"
	on:click={toggleInfo}
	on:keypress={toggleInfo} />
