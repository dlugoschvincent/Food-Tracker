import { getServerSession } from '@supabase/auth-helpers-sveltekit'
import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async (event) => {
	const session = await getServerSession(event)
	if (!session && event.url.pathname != '/auth/signin') {
		throw redirect(303, '/auth/signin')
	}
	return {
		session
	}
}
