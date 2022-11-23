<script lang="ts">
  export let id: number | undefined
  export let name: string | undefined
  export let deleted = false
</script>

<form
  on:submit={() => (deleted = true)}
  method="post"
  action="?/delete"
  class="grid justify-self-end">
  <input
    hidden
    value={id}
    name="servingId" />
  <button
    type="submit"
    aria-label="Delete {name}"
    class="i-akar-icons:cross text-3xl color-red-500" />
</form>
