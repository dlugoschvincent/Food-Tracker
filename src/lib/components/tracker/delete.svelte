<script lang="ts">
	import { enhance } from '$app/forms'
	interface Props {
		id: bigint
		deleted: boolean
	}

	let { id, deleted = $bindable() }: Props = $props()
</script>

<form
	use:enhance
	onsubmit={() => (deleted = true)}
	method="post"
	class="flex justify-end"
	action="?/delete">
	<input
		hidden
		value={id}
		name="servingId" />

	<input
		type="submit"
		class="color-red-500 i-octicon:x-16" />
</form>
