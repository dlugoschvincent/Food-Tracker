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
  <input
    required
    class="rounded-md border-2 border-orange-100 outline-orange-300 p-2 col-span-2"
    type="email"
    name="email"
    placeholder="Email" />
  <input
    required
    class="rounded-md border-2 border-orange-100 outline-orange-300 p-2 col-span-2"
    type="password"
    name="password"
    placeholder="Password" />
  <button class="rounded-md bg-orange-400 p-2 col-span-2" type="submit">Login</button>
  {#if errorMessage} <div class="text-xs text-red-600">{errorMessage}</div>{/if}
</form>
