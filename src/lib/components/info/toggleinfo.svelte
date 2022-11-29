<script lang="ts">
	import { infoToggled } from '$lib/stores/infoStore'
	function toggleInfo() {
		infoToggled.update((infoToggled) => !infoToggled)
	}
</script>

<div
	class="cursor-pointer opacity-50 text-2xl text-green-500 i-akar-icons:info place-self-center"
	on:click={toggleInfo}
	on:keypress={toggleInfo} />
