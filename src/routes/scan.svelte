<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Scanner from '$lib/components/scanner.svelte';

  let scanResult: string | null = null;

  function verifyCode(code: string | null) {
    return code !== null && (code.length === 13 || code.length === 8) && code.charAt(0) === '4';
  }

  async function addProductAndNavigate(code: string) {
    let res = await fetch('/scan', {
      method: 'POST',
      body: JSON.stringify({ barCode: code })
    });
    if (res) {
      goto(`/products/${code}?meal=${$page.url.searchParams.get('meal')}`);
    }
  }
  $: {
    if (verifyCode(scanResult)) {
      addProductAndNavigate(scanResult!);
    }
  }
</script>

<svelte:head>
  <title>Food scanner</title>
</svelte:head>
<Scanner bind:scanResult />
