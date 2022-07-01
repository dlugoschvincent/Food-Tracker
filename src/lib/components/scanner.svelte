<script lang="ts">
  import {
    Html5QrcodeScanner,
    Html5QrcodeScanType,
    Html5QrcodeSupportedFormats
  } from 'html5-qrcode';
  import type { Html5QrcodeResult } from 'html5-qrcode/core';
  import { onDestroy, onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  let scannerWidth: number;
  let html5QrcodeScanner: Html5QrcodeScanner;
  async function onScanSuccess(decodedText: string, decodedResult: Html5QrcodeResult) {
    console.log(`Code matched = ${decodedText}`, decodedResult);
    if (
      (decodedResult.result.format?.format === Html5QrcodeSupportedFormats.EAN_13 ||
        decodedResult.result.format?.format === Html5QrcodeSupportedFormats.EAN_8) &&
      decodedText.charAt(0) === '4'
    ) {
      html5QrcodeScanner.clear();
      let res = await fetch('./scan', {
        method: 'POST',
        body: JSON.stringify({ barCode: decodedText })
      });
      if (res) {
        goto(`/products/${decodedText}?meal=${$page.url.searchParams.get('meal')}`);
      }
    }
  }

  onDestroy(() => {
    html5QrcodeScanner.clear();
  });

  function onScanFailure(error: string) {}

  onMount(() => {
    let config = {
      fps: 60,
      qrbox: { width: scannerWidth * 0.3, height: 50 },
      aspectRatio: 16/9,
      rememberLastUsedCamera: true,
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
    };
    html5QrcodeScanner = new Html5QrcodeScanner('reader', config, /* verbose= */ false);
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  });
</script>

<div
  in:fade={{ duration: 1000, delay: 500 }}
  bind:clientWidth={scannerWidth}
  class="mx-auto grid gap-4 md:max-w-sm">
  <div id="reader" />
</div>
