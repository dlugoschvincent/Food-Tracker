import { writable } from 'svelte/store';
import { supabase } from '$lib/supabaseclient';

export const user = writable(supabase.auth.user());
