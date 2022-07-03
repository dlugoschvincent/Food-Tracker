<script lang="ts">
  import Koder from '@maslick/koder';
  import { onMount } from 'svelte';
  let canvas: HTMLCanvasElement = document.createElement('canvas');
  let video: HTMLVideoElement ;
  let res: string | null = null;
  onMount(async () => {
    let stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment', aspectRatio: 1 }
    });
    video.srcObject = stream;
    video.play();
    const ctx = canvas.getContext('2d');
    const koder = await new Koder().initialized;
    let oldTime = 0;
    function tick(time: number) {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = Math.min(window.innerWidth, video.videoWidth);
        canvas.height = Math.min(window.innerHeight, video.videoHeight);
        ctx?.drawImage(video, 0, 0);
        if (time - oldTime > 600) {
          oldTime = time;
          let imageData = ctx?.getImageData(0, 0, video.videoWidth, video.videoHeight);
          res = koder.decode(imageData?.data, imageData?.width, imageData?.height);
        }
      }
      if (res !== null && (res.length === 13 || res.length === 8) && res.charAt(0) === '4') {
        video.pause();
        stream.getTracks().forEach(function (track) {
          track.stop();
        });
        video.srcObject = null;
      } else {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);
  });
</script>

<div class="mx-auto sm:max-w-sm">
  <video bind:this={video} />
</div>
<div>{res}</div>
