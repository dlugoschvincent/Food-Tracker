<script lang="ts">
  import { supabase } from '$lib/supabaseclient';

  async function signOut() {
    const {} = await supabase.auth.signOut();
  }
</script>

<button on:click={signOut} class="rounded-md bg-red-500 p-2  text-light-200  dark:bg-red-700"
  >Logout</button>
