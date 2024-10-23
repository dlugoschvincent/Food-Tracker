<script lang="ts">
	import { getContext } from 'svelte'
	let darkMode: { on: boolean } = getContext('darkMode')

	function toggleDarkmode() {
		darkMode.on = !darkMode.on
	}
</script>

<div
	role="button"
	tabindex="0"
	class="dark:i-material-symbols:light-mode-outline i-material-symbols:dark-mode-outline cursor-pointer place-self-center text-2xl"
	onclick={toggleDarkmode}
	onkeydown={toggleDarkmode}>
</div>
