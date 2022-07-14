<script lang="ts">
  import Quagga from '@ericblade/quagga2';
  import { onDestroy, onMount } from 'svelte';
  export let scanResult: string | null;
  let quaggaTarget = document.createElement('div');
  let loading = true;
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
          console.error(err);
          return;
        }
        Quagga.start();
        loading = false;
      }
    );

    Quagga.onDetected((data) => {
      if (data.codeResult.startInfo.error < 0.1) {
        Quagga.offDetected();
        Quagga.stop();
        scanResult = data.codeResult.code;
      }
    });
  });

  onDestroy(() => {
    Quagga.stop();
  });
</script>

{#if loading}
  <div
    class="animate-spin text-8xl text-orange-300 col-start-1 row-start-1 i-quill:loading-spin place-self-center dark:text-orange-500" />
{/if}
<div
  class="max-w-full z-10 col-start-1 row-start-1 place-self-center overflow-hidden children:rounded-md"
  bind:this={quaggaTarget} />
