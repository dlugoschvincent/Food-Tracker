<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		children: Snippet
	}

	let { children }: Props = $props()
</script>

<div class="grid place-items-center">
	<div
		class="grid w-full grid-cols-2 gap-4 rounded-md border-2 border-orange-200 p-4 sm:w-72 dark:border-orange-400">
		<a
			href="/auth/signup"
			class="col-span-1 rounded-md bg-orange-300 p-2 text-center dark:bg-orange-500">Sign Up</a>
		<a
			href="/auth/signin"
			class="col-span-1 rounded-md bg-orange-300 p-2 text-center dark:bg-orange-500">Sign In</a>
		{@render children()}
	</div>
</div>
