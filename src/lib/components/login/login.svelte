<script lang="ts">
  import { supabase } from '$lib/supabaseclient';

  let errorMessage: string | undefined;

  async function login(form: FormData) {
    const { error } = await supabase.auth.signIn({
      email: form.get('email') as string,
      password: form.get('password') as string
    });
    errorMessage = error?.message;
  }
</script>

<form
  class="grid gap-4 col-span-2"
  on:submit|preventDefault={(event) => {
    login(new FormData(event.currentTarget));
  }}>
  <input class="col-span-2 input-text" name="email" type="email" required placeholder="Email" />
  <input
    class="col-span-2 input-text"
    name="password"
    type="password"
    required
    placeholder="Password" />
  <button class="rounded-md bg-orange-300 p-2 col-span-2 dark:bg-orange-500" type="submit">
    Login
  </button>
  {#if errorMessage}
    <div class="text-xs text-red-500">{errorMessage}</div>
  {/if}
</form>
