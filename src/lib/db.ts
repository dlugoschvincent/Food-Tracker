import { createClient } from '@supabase/auth-helpers-sveltekit';
import { env } from '$env/dynamic/public';
import type { Database } from 'types/database/database.types';

export const supabaseClient = createClient(
	env.PUBLIC_SUPABASE_URL ?? '',
	env.PUBLIC_SUPABASE_ANON_KEY ?? ''
);
