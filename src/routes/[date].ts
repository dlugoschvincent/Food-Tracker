import { supabase } from '$lib/supabaseclient';
import type { definitions } from 'types/database';
import type { RequestHandler } from './__types/[date]';

// export const get: RequestHandler = async ({ params }) => {
//   const { data: product, status } = await supabase
//     .from<definitions['Food']>('Food')
//     .select('*')
//     .eq('bar_code', parseInt(params.date));
//   if (product === null || product[0] === undefined) {
//     return { status: 404 };
//   }
//   return {
//     status,
//     body: {
//       product: product.pop()
//     }
//   };
// };