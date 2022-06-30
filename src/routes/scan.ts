import { supabase } from '$lib/supabaseclient';
import type { RequestHandler } from './__types/scan';
import type { definitions } from 'types/database';

export const post: RequestHandler = async ({ request }) => {
  const json = await request.json();
  const { error, status } = await supabase
    .from<definitions['Food']>('Food')
    .insert({ bar_code: json.barCode });
  if (error) {
    return { status };
  }
  return {
    status
  };
};
