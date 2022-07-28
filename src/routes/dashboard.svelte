<script lang="ts">
  import { session } from '$app/stores';
  
</script>

<div>Welcome {$session.user.email}</div>
