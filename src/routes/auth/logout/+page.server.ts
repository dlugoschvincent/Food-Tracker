import type { Actions } from './$types';
import { deleteSession } from '@supabase/auth-helpers-sveltekit/server';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
  async default({ cookies }) {
    deleteSession(cookies);
    throw redirect(303, '/auth/signin');
  }
};