<script lang="ts">
	let searchQuery: string
</script>

<div class="grid gap-4 col-span-2">
	<form class="grid gap-4">
		<input
			class="rounded-md border-2 border-orange-200 outline-orange-300 p-2"
			type="text"
			placeholder="Search"
			bind:value={searchQuery} />
		<button
			type="submit"
			class="rounded-md bg-orange-300 border-2 border-orange-200 p-2">Search</button>
	</form>
</div>
