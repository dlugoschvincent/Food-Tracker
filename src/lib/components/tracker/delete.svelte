<script lang="ts">
	import { enhance } from '$app/forms'
	interface Props {
		id: BigInt
		name: string
		deleted: boolean
	}

	let { id, name, deleted = $bindable() }: Props = $props()
</script>

<form
	use:enhance
	onsubmit={() => (deleted = true)}
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
		class="i-akar-icons:cross color-red-500 text-3xl"></button>
</form>
