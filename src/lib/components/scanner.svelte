<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import Quagga from '@ericblade/quagga2'
	import { onDestroy, onMount } from 'svelte'
	import Info from './info/info.svelte'
	let quaggaTarget: HTMLDivElement | undefined
	let loading = true
	onMount(() => {
		Quagga.init(
			{
				inputStream: {
					name: 'Live',
					type: 'LiveStream',
					target: quaggaTarget,
					constraints: {
						facingMode: 'environment'
					}
				},
				decoder: {
					readers: ['ean_reader']
				}
			},
			(err) => {
				if (err) {
					console.error(err)
					return
				}
				Quagga.start()
				loading = false
			}
		)

		Quagga.onDetected((data) => {
			if (data.codeResult.startInfo.error < 0.1 && data.codeResult.code?.charAt(0) === '4') {
				Quagga.offDetected()
				Quagga.stop()
				goto(`/tracker/${$page.params.date}/${$page.params.meal}/${data.codeResult.code}`)
			}
		})
	})

	onDestroy(() => {
		Quagga.stop()
	})
</script>

<Info
	>Here can you scan the bar code of the food item you wish to eat. The scanner will accept EAN
	(European Article Number) codes.</Info>

{#if loading}
	<div
		class="i-quill:loading-spin col-start-1 row-start-2 animate-spin place-self-center text-8xl text-orange-300 dark:text-orange-500" />
{/if}
<div
	class="sm:max-w-120 children:rounded-md z-10 col-start-1 row-start-2 max-w-full place-self-center overflow-hidden"
	bind:this={quaggaTarget} />
