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
	class="i-octicon:info-16 cursor-pointer place-self-center text-green-500 opacity-50"
	onclick={toggleInfo}
	onkeypress={toggleInfo}>
</div>
