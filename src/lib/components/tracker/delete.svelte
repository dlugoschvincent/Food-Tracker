<script lang="ts">
  import { page } from '$app/stores';

  export let id: number;
  export let name: string;
  export let deleted = false;
</script>

<form
  on:submit={() => (deleted = true)}
  method="post"
  action="{$page.url.pathname}?_method=DELETE"
  class="justify-self-end">
  <input hidden value={id} name="servingId" />
  <button
    type="submit"
    aria-label="Delete {name}"
    class="rounded-full bg-red-500 grid p-2 text-light-200 place-items-center dark:bg-red-700"
    ><div class="text-xl i-akar-icons:cross" />
  </button>
</form>
