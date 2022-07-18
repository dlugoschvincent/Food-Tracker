<script lang="ts">
  import { darkmode } from '$lib/stores/darkmodeStore';
  function toggleDarkmode() {
    darkmode.update((isDark) => !isDark);
  }
</script>

<div
  class:i-material-symbols:light-mode-outline={$darkmode}
  class:i-material-symbols:dark-mode-outline={!$darkmode}
  class="text-2xl place-self-center cursor-pointer"
  on:click={toggleDarkmode} />
