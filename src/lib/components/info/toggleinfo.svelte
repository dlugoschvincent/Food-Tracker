<script lang="ts">
  import { infoToggled } from '$lib/stores/infoStore';
  function toggleInfo() {
    infoToggled.update((infoToggled) => !infoToggled);
  }
</script>

<div class="text-2xl i-akar-icons:info place-self-center" on:click={toggleInfo} />
