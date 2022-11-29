<script lang="ts">
	function toggleDarkmode() {
		window.document.body.classList.toggle('dark')
	}
</script>

<div
	class="text-2xl place-self-center cursor-pointer dark:i-material-symbols:light-mode-outline i-material-symbols:dark-mode-outline"
	on:click={toggleDarkmode}
	on:keydown={toggleDarkmode} />
