<script lang="ts">
  import { supabase } from '$lib/supabaseclient';

  async function signOut() {
    const {} = await supabase.auth.signOut();
  }
</script>

<button on:click={signOut} class="rounded-md bg-red-600 text-white p-2">Logout</button>
