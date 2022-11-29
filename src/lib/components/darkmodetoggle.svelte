<script lang="ts">
	function toggleDarkmode() {
		window.document.body.classList.toggle('dark')
	}
</script>

<div
	class="dark:i-material-symbols:light-mode-outline i-material-symbols:dark-mode-outline cursor-pointer place-self-center text-2xl"
	on:click={toggleDarkmode}
	on:keydown={toggleDarkmode} />
