<script lang="ts">
	import { infoToggled } from '$lib/stores/infoStore'
	function toggleInfo() {
		infoToggled.update((infoToggled) => !infoToggled)
	}
</script>

<div
	class="i-akar-icons:info cursor-pointer place-self-center text-2xl text-green-500 opacity-50"
	on:click={toggleInfo}
	on:keypress={toggleInfo} />
