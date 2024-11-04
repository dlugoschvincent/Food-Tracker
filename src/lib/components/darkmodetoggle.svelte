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
	class="dark:i-octicon:sun-16 i-octicon:moon-16 cursor-pointer place-self-center"
	onclick={toggleDarkmode}
	onkeydown={toggleDarkmode}>
</div>
