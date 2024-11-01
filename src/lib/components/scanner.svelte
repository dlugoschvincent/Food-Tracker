<script lang="ts">
	import { goto } from '$app/navigation'
	import { navigating, page } from '$app/stores'
	import Quagga from '@ericblade/quagga2'
	import { onDestroy, onMount } from 'svelte'
	import Info from './info/info.svelte'
	let quaggaTarget: HTMLDivElement | undefined = $state()
	let loading = $state(true)
	onMount(() => {
		Quagga.init(
			{
				locate: true,
				inputStream: {
					name: 'Live',
					type: 'LiveStream',
					target: quaggaTarget,
					constraints: {
						width: 1440,
						height: 1920,
						facingMode: 'environment'
					}
				},
				frequency: 30,
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
				Quagga.canvas.dom.overlay.remove()
				loading = false
			}
		)

		Quagga.onDetected((data) => {
			if (data.codeResult.startInfo.error < 0.1 && data.codeResult.code?.charAt(0) === '4') {
				Quagga.offDetected()
				Quagga.stop()
				const productUrl = new URL(`/product/${data.codeResult.code}`, $page.url.origin)
				$page.url.searchParams.forEach((value, key) => {
					productUrl.searchParams.set(key, value)
				})
				goto(productUrl.toString())
			}
		})
	})

	onDestroy(() => {
		Quagga.stop()
	})
</script>

{#if loading && !$navigating}
	<icon
		class="i-prime:spinner absolute z-0 col-start-1 row-start-2 animate-spin place-self-center text-2xl text-orange-300 dark:text-orange-500"
	></icon>
{/if}

<div
	class="sm:max-w-120 children:rounded-md relative z-10 col-start-1 row-start-2 max-w-full place-self-center overflow-hidden"
	bind:this={quaggaTarget}>
</div>

<Info
	>Here can you scan the bar code of the food item you wish to eat. The scanner will accept EAN
	(European Article Number) codes.</Info>
