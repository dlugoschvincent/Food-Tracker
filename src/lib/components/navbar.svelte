<script>
	import { page } from '$app/stores'
	import Darkmodetoggle from '$lib/components/darkmodetoggle.svelte'
	import { signOut, signIn } from '@auth/sveltekit/client'
	import Toggleinfo from './info/toggleinfo.svelte'
</script>

<nav>
	<div class="container mx-auto grid min-h-[72px] grid-flow-col p-4">
		<div class="grid auto-cols-min grid-flow-col place-items-center gap-4 text-xl">
			{#if true}
				<a href="/tracker/{new Date().toISOString().slice(0, 10)}">Today</a>
			{/if}
			<Darkmodetoggle />
			<Toggleinfo />
		</div>
		<div class="flex items-center justify-end gap-4">
			{#if $page.data.session?.user?.email}
				<div>{$page.data.session?.user?.email}</div>
				<button
					onclick={() => signOut()}
					class="border-red rounded-md border-2 p-2">Sign Out</button>
			{:else}
				<button
					class="border-red rounded-md border-2 p-2"
					onclick={() => signIn('keycloak')}>Sign In</button>
			{/if}
		</div>
	</div>
</nav>
