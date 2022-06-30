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
  class="col-span-2 grid gap-2"
  on:submit|preventDefault={(event) => {
    createUser(new FormData(event.currentTarget));
  }}>
  <input
    required
    class="rounded-md border-2 border-orange-100 p-2 outline-orange-300"
    type="email"
    name="email"
    placeholder="Email" />
  <input
    required
    class="rounded-md border-2 border-orange-100 p-2 outline-orange-300"
    type="password"
    name="password"
    placeholder="Password" />
  <button class="rounded-md bg-orange-400 p-2" type="submit">Sign Up</button>
  {#if errorMessage} <div class="text-xs text-red-600">{errorMessage}</div>{/if}
</form>
