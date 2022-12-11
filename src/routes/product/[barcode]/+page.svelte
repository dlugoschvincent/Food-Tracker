<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<h1>{data.product.name}</h1>
<div>{data.product.barCode}</div>
