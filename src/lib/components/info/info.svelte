<script>
  import { infoToggled } from '$lib/stores/infoStore'
</script>

{#if $infoToggled}
  <div class="border-2 border-green-500 max-w-120 grid grid-flow-col p-4 gap-4 place-self-center">
    <div class="text-5xl place-self-center i-akar-icons:info" />
    <slot />
  </div>
{/if}
