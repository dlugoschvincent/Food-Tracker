import type { definitions } from 'types/database';
import type { RequestHandler } from './__types';
import { supabaseServerClient } from '@supabase/auth-helpers-sveltekit';

export const POST: RequestHandler = async ({ request }) => {
  const json = await request.json();
  const { error, status } = await supabaseServerClient(request)
    .from<definitions['Food']>('Food')
    .insert({ bar_code: json.barCode });
  if (error) {
    return { status };
  }
  return {
    status
  };
};
