<script lang="ts">
  import {
    Html5QrcodeScanner,
    Html5QrcodeScanType,
    Html5QrcodeSupportedFormats
  } from 'html5-qrcode';
  import type { Html5QrcodeResult } from 'html5-qrcode/core';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  let html5QrcodeScanner: Html5QrcodeScanner;
  async function onScanSuccess(decodedText: string, decodedResult: Html5QrcodeResult) {
    // handle the scanned code as you like, for example:
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

  function onScanFailure(error: string) {
    // handle the error as you like, for example:
  }

  let config = {
    fps: 10,
    qrbox: { width: 200, height: 50 },
    rememberLastUsedCamera: true,
    // Only support camera scan type.
    supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
  };
  onMount(() => {
    html5QrcodeScanner = new Html5QrcodeScanner('reader', config, /* verbose= */ false);
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  });
</script>

<div class="col-span-1 grid gap-4 md:max-w-xl">
  <div id="reader" />
</div>
