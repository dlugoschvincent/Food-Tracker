import '$lib/db'
import { dev } from '$app/environment'
import { auth } from '@supabase/auth-helpers-sveltekit/server'

export const handle = auth()
