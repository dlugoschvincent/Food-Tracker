<script>
	import Toggleinfo from './info/toggleinfo.svelte'
	import Logout from './login/logout.svelte'
	import Darkmodetoggle from '$lib/components/darkmodetoggle.svelte'
</script>

<nav>
	<div class="container mx-auto grid min-h-[72px] grid-flow-col p-4">
		<div class="grid auto-cols-min grid-flow-col place-items-center gap-4 text-xl">
			{#if true}
				<a href="/{new Date().toISOString().slice(0, 10)}">Today</a>
			{/if}
			<Darkmodetoggle />
			<Toggleinfo />
		</div>
		<div class="place-self-end">
			<Logout />
		</div>
	</div>
</nav>
