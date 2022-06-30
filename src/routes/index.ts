import { supabase } from '$lib/supabaseclient';
import type { RequestHandler } from './__types/';
import type { definitions } from 'types/database';

export const get: RequestHandler = async ({ request }) => {
  
  const { data, error, status } = await supabase
    .from<definitions['UserAteFood']>('UserAteFood')
    .select('*')
    .eq('meal', 'breakfast');
  return {
    status,
    body: { servings: data }
  };
};
