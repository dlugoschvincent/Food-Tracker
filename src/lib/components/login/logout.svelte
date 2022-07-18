<script>
  import { session } from '$app/stores';
</script>

{#if $session.user}
  <a href="/api/auth/logout" class="py-1 px-2 border-2 text-lg block">Logout</a>
{/if}
