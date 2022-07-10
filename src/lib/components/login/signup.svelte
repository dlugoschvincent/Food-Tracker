<script lang="ts">
  import { supabase } from '$lib/supabaseclient';

  let errorMessage: string | undefined;

  async function createUser(form: FormData) {
    const { error } = await supabase.auth.signUp({
      email: form.get('email') as string,
      password: form.get('password') as string
    });
    errorMessage = error?.message;
  }
</script>

<form
  class="grid gap-4 col-span-2"
  on:submit|preventDefault={(event) => {
    createUser(new FormData(event.currentTarget));
  }}>
  <input
    required
    class="col-span-2 input-text"
    type="email"
    name="email"
    placeholder="Email" />
  <input
    required
    class="col-span-2 input-text"
    type="password"
    name="password"
    placeholder="Password" />
  <button
    class="rounded-md bg-orange-300 p-2 col-span-2 dark:bg-orange-500"
    type="submit">Sign Up</button>
  {#if errorMessage}
    <div class="text-xs text-red-500 col-span-2">{errorMessage}</div>{/if}
</form>
