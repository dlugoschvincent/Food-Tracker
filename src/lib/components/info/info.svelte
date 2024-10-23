<script lang="ts">
	import { navigating } from '$app/stores'
	import { getContext, type Snippet } from 'svelte'

	let infoMode: { on: boolean } = getContext('infoMode')

	interface Props {
		children: Snippet
	}
	let { children }: Props = $props()
</script>

{#if infoMode.on && !$navigating}
	<div class="max-w-120 grid grid-flow-col gap-4 place-self-center border-2 border-green-500 p-4">
		<div class="i-akar-icons:info place-self-center text-5xl"></div>
		{@render children()}
	</div>
{/if}
