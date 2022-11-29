<script lang="ts">
	import { page } from '$app/stores'

	import Serving from '$lib/components/tracker/serving.svelte'

	import type { Database } from 'types/database/database.types'

	export let meal: string
	export let servings:
		| (Database['public']['Tables']['UserAteFood']['Row'] & {
				Food: Database['public']['Tables']['Food']['Row']
		  })[]
		| undefined
</script>

<div class="border-1 grid rounded-md border-orange-500 border-opacity-50">
	<div>
		<div class="grid grid-flow-col p-2">
			<h2 class="my-auto">{meal}:</h2>
			<a
				href="{$page.url.pathname}/{meal}/scan"
				class="my-auto grid place-items-center place-self-end rounded-full"
				aria-label="Add {meal}">
				<icon class="i-akar-icons:plus color-orange-500 text-3xl" />
			</a>
		</div>
	</div>
	{#if servings}
		{#each servings as serving}
			<Serving {serving} />
		{/each}
	{/if}
</div>
