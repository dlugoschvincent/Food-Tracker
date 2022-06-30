<script lang="ts">
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';
  $: currentDate = new Date($page.params.date);
  $: prevDate = new Date(new Date(currentDate).setDate(currentDate.getDate() - 1));
  $: nextDate = new Date(new Date(currentDate).setDate(currentDate.getDate() + 1));
</script>

<div class="grid grid-flow-col justify-between rounded-md border-2 border-transparent p-2">
  <a sveltekit:prefetch href="/{prevDate.toDateString()}" class="rounded-full bg-orange-300 p-2">
    <Icon width="20" icon="akar-icons:arrow-left" />
  </a>
  <div class="place-self-center align-middle text-xl">{currentDate.toDateString()}</div>
  <a sveltekit:prefetch href="/{nextDate.toDateString()}" class="rounded-full bg-orange-300 p-2">
    <Icon width="20" icon="akar-icons:arrow-right" />
  </a>
</div>
