<script lang="ts">
	import { enhance } from '$app/forms'
	export let id: BigInt
	export let name: string
	export let deleted = false
</script>

<form
	use:enhance
	on:submit={() => (deleted = true)}
	method="post"
	action="?/delete"
	class="grid justify-self-end">
	<input
		hidden
		value={id}
		name="servingId" />
	<button
		type="submit"
		aria-label="Delete {name}"
		class="i-akar-icons:cross color-red-500 text-3xl" />
</form>
