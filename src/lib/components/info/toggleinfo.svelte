<script lang="ts">
	import { getContext } from 'svelte'
	let infoMode: { on: boolean } = getContext('infoMode')

	function toggleInfo() {
		infoMode.on = !infoMode.on
	}
</script>

<div
	role="button"
	tabindex="0"
	class="i-akar-icons:info cursor-pointer place-self-center text-2xl text-green-500 opacity-50"
	onclick={toggleInfo}
	onkeypress={toggleInfo}>
</div>
