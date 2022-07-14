<script lang="ts">
  import { navigating } from '$app/stores';

  import Quagga from '@ericblade/quagga2';
  import { onDestroy, onMount } from 'svelte';
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
      }
    );
    Quagga.onDetected((data) => {
      console.log(data);
    });
  });

  onDestroy(() => {
    Quagga.stop();
  });
</script>

<div bind:this={quaggaTarget} />

{#if loading}
  <div
    class="animate-spin text-8xl text-orange-300 i-quill:loading-spin place-self-center dark:text-orange-500" />
{/if}
