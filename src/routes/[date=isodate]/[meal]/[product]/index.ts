import { supabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import type { definitions } from 'types/database';

import type { RequestHandler } from './__types';

export const GET: RequestHandler = async ({ params, request }) => {
  const { data: product, status } = await supabaseServerClient(request)
    .from<definitions['Food']>('Food')
    .select('*')
    .eq('bar_code', parseInt(params.product));
  return {
    status,
    body: {
      product
    }
  };
};

export const PUT: RequestHandler = async ({ request, params }) => {
  const formData = await request.formData();
  await supabaseServerClient(request)
    .from('Food')
    .upsert({
      bar_code: params.product,
      name: formData.get('name'),
      fat: formData.get('fat'),
      protein: formData.get('protein'),
      carbohydrates: formData.get('carbohydrates')
    });

  return {
    status: 200
  };
};

export const DELETE: RequestHandler = async ({ params, request }) => {
  await supabaseServerClient(request).from('Food').delete().eq('bar_code', params.product);
  return {
    status: 200
  };
};

export const POST: RequestHandler = async ({ request, params }) => {
  const formData = await request.formData();
  const { status } = await supabaseServerClient(request)
    .from('Food')
    .upsert({
      bar_code: params.product,
      name: formData.get('name'),
      fat: formData.get('fat'),
      protein: formData.get('protein'),
      carbohydrates: formData.get('carbohydrates')
    });

  return {
    status
  };
};
// export const PUT: RequestHandler = async ({ request, params, url }) => {
//   const formData = await request.formData();
//   const userId = formData.get('userId') as string;
//   console.log(url.searchParams.get('meal'))
//   console.log(userId)
//   console.log(parseInt(params.product))
//   if (!userId) {
//     return { status: 500 };
//   }
//   await supabaseServerClient(request).from<definitions['UserAteFood']>('UserAteFood').insert({
//     food_id: parseInt(params.product),
//     meal: url.searchParams.get('meal') as string,
//     grams: parseInt(formData.get('grams') as string),
//     user_id: userId
//   });
//
//   return {
//     status: 303,
//     headers: {
//       Location: url.origin
//     }
//   };
// };
