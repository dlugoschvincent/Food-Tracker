<script>
	import { page } from '$app/stores'
	import Darkmodetoggle from '$lib/components/darkmodetoggle.svelte'
	import { signOut, signIn } from '@auth/sveltekit/client'
	import Toggleinfo from './info/toggleinfo.svelte'
</script>

<nav>
	<div class="container mx-auto flex min-h-[72px] items-center gap-4 p-4">
		{#if true}
			<a
				href="/tracker/{new Date().toISOString().slice(0, 10)}"
				class="text-xl">Today</a>
		{/if}
		<Darkmodetoggle />
		<Toggleinfo />
		{#if $page.data.session?.user?.email}
			<button
				onclick={() => signOut()}
				class="border-red ml-auto rounded-md border-2 bg-transparent p-2 text-xl">Sign Out</button>
		{:else}
			<button
				class="border-red ml-auto rounded-md border-2 bg-transparent p-2 text-xl"
				onclick={() => signIn('keycloak')}>Sign In</button>
		{/if}
	</div>
</nav>
