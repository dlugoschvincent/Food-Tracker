<script lang="ts">
	let searchQuery: string
</script>

<div class="col-span-2 grid gap-4">
	<form class="grid gap-4">
		<input
			class="rounded-md border-2 border-orange-200 p-2 outline-orange-300"
			type="text"
			placeholder="Search"
			bind:value={searchQuery} />
		<button
			type="submit"
			class="rounded-md border-2 border-orange-200 bg-orange-300 p-2">Search</button>
	</form>
</div>
