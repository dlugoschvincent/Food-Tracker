<script lang="ts">
  import Koder from '@maslick/koder';
  import { onDestroy, onMount } from 'svelte';

  export let scanResult: string | null;

  const canvas: HTMLCanvasElement = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  let video: HTMLVideoElement;
  let loading = true;
  let stream: MediaStream;

  function closeStream() {
    stream?.getTracks().forEach((track) => track.stop());
  }
  async function attachCameraToVideo(video: HTMLVideoElement) {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment', aspectRatio: 1 }
    });
    video.srcObject = stream;
    video.play();
  }

  onMount(async () => {
    await attachCameraToVideo(video);
    loading = false;
    const koder = await new Koder().initialized;
    let oldTime = 0;
    async function tick(time: number) {
      if (!video) return closeStream();
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx?.drawImage(video, 0, 0);
        if (time - oldTime > 500) {
          oldTime = time;
          let imageData = ctx?.getImageData(0, 0, video.videoWidth, video.videoHeight);
          scanResult = koder.decode(imageData?.data, imageData?.width, imageData?.height);
        }
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });

  onDestroy(() => {
    closeStream();
  });
</script>

<div class="mx-auto grid sm:max-w-sm">
  {#if loading}
    <div class="animate-spin text-8xl text-orange-300 i-quill:loading-spin place-self-center" />
  {/if}
  <!-- svelte-ignore a11y-media-has-caption -->
  <video class="rounded-md" playsinline bind:this={video} />
</div>
