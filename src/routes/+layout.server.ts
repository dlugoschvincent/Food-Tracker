import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals, url }) => {
  if(!locals.session.user &&  url.pathname != '/auth/signin'){
    throw redirect(303, '/auth/signin')
  }
  return {
    session: locals.session
  }
}
