<script>
	import { infoToggled } from '$lib/stores/infoStore'
</script>

{#if $infoToggled}
	<div class="max-w-120 grid grid-flow-col gap-4 place-self-center border-2 border-green-500 p-4">
		<div class="i-akar-icons:info place-self-center text-5xl" />
		<slot />
	</div>
{/if}
