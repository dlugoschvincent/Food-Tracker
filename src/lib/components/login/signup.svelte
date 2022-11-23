<script lang="ts">
  import Inputfloat from '$lib/components/formelements/inputfloat.svelte'
</script>

<form
  method="post"
  class="grid gap-4 col-span-2">
  <div class="col-span-2">
    <Inputfloat
      name="email"
      type="email"
      required
      placeholder="E-Mail" />
  </div>
  <div class="col-span-2">
    <Inputfloat
      name="password"
      type="password"
      required
      placeholder="Password" />
  </div>
  <button
    class="rounded-md bg-orange-300 p-2 col-span-2 dark:bg-orange-500"
    type="submit">
    Sign Up
  </button>
</form>
