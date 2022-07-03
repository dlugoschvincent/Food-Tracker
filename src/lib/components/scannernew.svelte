<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Koder from '@maslick/koder';
  import { onDestroy, onMount } from 'svelte';
  import { Circle } from 'svelte-loading-spinners';
  let canvas: HTMLCanvasElement = document.createElement('canvas');
  let video: HTMLVideoElement;
  let scanResult: string | null = null;
  let loading = true;
  let stream: MediaStream;
  const ctx = canvas.getContext('2d');

  function closeScanner() {
    stream?.getTracks().forEach((track) => track.stop());
  }

  onMount(async () => {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment', aspectRatio: 1 }
    });
    if (!video) return closeScanner();
    video.srcObject = stream;
    loading = false;
    video?.play();
    const koder = await new Koder().initialized;
    let oldTime = 0;
    async function tick(time: number) {
      if (video) {
        if (video?.readyState === video?.HAVE_ENOUGH_DATA) {
          canvas.width = video?.videoWidth;
          canvas.height = video?.videoHeight;
          ctx?.drawImage(video, 0, 0);
          if (time - oldTime > 600) {
            oldTime = time;
            let imageData = ctx?.getImageData(0, 0, video?.videoWidth, video?.videoHeight);
            scanResult = koder.decode(imageData?.data, imageData?.width, imageData?.height);
          }
        }
      }
      if (
        scanResult !== null &&
        (scanResult.length === 13 || scanResult.length === 8) &&
        scanResult.charAt(0) === '4'
      ) {
        closeScanner();
        let res = await fetch('./scan', {
          method: 'POST',
          body: JSON.stringify({ barCode: scanResult })
        });
        if (res) {
          goto(`/products/${scanResult}?meal=${$page.url.searchParams.get('meal')}`);
        }
      } else {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);
  });

  onDestroy(() => {
    closeScanner();
  });
</script>

<div class="grid">
  {#if loading}
    <div class="place-self-center">
      <Circle color="#fdba74" size="30" />
    </div>
  {/if}
  <div class="mx-auto sm:max-w-sm">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video playsinline bind:this={video} />
  </div>
</div>
