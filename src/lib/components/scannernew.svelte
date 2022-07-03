<script lang="ts">
  import Koder from '@maslick/koder';
  import { onMount } from 'svelte';
  let canvas: HTMLCanvasElement;
  const video: HTMLVideoElement = document.createElement('video');
  let res: string | null = null;
  onMount(async () => {
    let stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });
    video.srcObject = stream;
    video.play();
    const ctx = canvas.getContext('2d');
    const koder = await new Koder().initialized;
    let oldTime = 0;
    function tick(time: number) {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx?.drawImage(video, 0, 0);
        if (time - oldTime > 600) {
          oldTime = time;
          let imageData = ctx?.getImageData(0, 0, video.videoWidth, video.videoHeight);
          // const t0 = new Date().getTime();
          res = koder.decode(imageData?.data, imageData?.width, imageData?.height);
          // const t1 = new Date().getTime();
          // console.log(`Scanned in ${t1 - t0} ms`); // Scanned in 7 ms
        }
      }
      if (res === null) {
        requestAnimationFrame(tick);
      } else {
        video.pause();
        stream.getTracks().forEach(function (track) {
          track.stop();
        });
        video.srcObject = null;
      }
    }
    requestAnimationFrame(tick);
  });
</script>

<canvas bind:this={canvas} />
<div>{res}</div>
