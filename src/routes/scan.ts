import type { definitions } from 'types/database';

import { supabaseClient } from '$lib/supabaseclient';

import type { RequestHandler } from './__types/scan';

export const POST: RequestHandler = async ({ request }) => {
  const json = await request.json();
  const { error, status } = await supabaseClient
    .from<definitions['Food']>('Food')
    .insert({ bar_code: json.barCode });
  if (error) {
    return { status };
  }
  return {
    status
  };
};
