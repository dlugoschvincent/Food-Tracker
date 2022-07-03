import type { definitions } from 'types/database';

import { supabase } from '$lib/supabaseclient';

import type { RequestHandler } from './__types/[product]';

export const get: RequestHandler = async ({ params }) => {
  const { data: product, status } = await supabase
    .from<definitions['Food']>('Food')
    .select('*')
    .eq('bar_code', parseInt(params.product));
  if (product === null || product[0] === undefined) {
    return { status: 404 };
  }
  return {
    status,
    body: {
      product: product.pop()
    }
  };
};

export const patch: RequestHandler = async ({ request, params }) => {
  const formData = await request.formData();
  await supabase
    .from('Food')
    .update({
      name: formData.get('name'),
      fat: formData.get('fat'),
      protein: formData.get('protein'),
      carbohydrates: formData.get('carbohydrates')
    })
    .eq('bar_code', params.product);

  return {
    status: 200
  };
};

export const del: RequestHandler = async ({ params }) => {
  await supabase.from('Food').delete().eq('bar_code', params.product);
  return {
    status: 200
  };
};

// export const post: RequestHandler = async ({ request, params, url }) => {
//   const formData = await request.formData();
//   const userId = formData.get('userId') as string;
//   console.log(url.searchParams.get('meal'))
//   console.log(userId)
//   console.log(parseInt(params.product))
//   if (!userId) {
//     return { status: 500 };
//   }
//   await supabase.from<definitions['UserAteFood']>('UserAteFood').insert({
//     food_id: parseInt(params.product),
//     meal: url.searchParams.get('meal') as string,
//     grams: parseInt(formData.get('grams') as string),
//     user_id: userId
//   });

//   return {
//     status: 303,
//     headers: {
//       Location: url.origin
//     }
//   };
// };
