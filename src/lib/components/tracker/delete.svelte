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
  class="grid justify-self-end">
  <input hidden value={id} name="servingId" />
  <button
    type="submit"
    aria-label="Delete {name}"
    class="i-akar-icons:cross text-3xl color-red-500" />
</form>
