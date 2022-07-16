import type { definitions } from "types/database";

import { supabaseClient } from "$lib/supabaseclient";

import type { RequestHandler } from "./__types";
import { supabaseServerClient } from "@supabase/auth-helpers-sveltekit";

export const GET: RequestHandler = async ({ params, request }) => {
  const { data: product, status } = await supabaseServerClient(request)
    .from<definitions["Food"]>("Food")
    .select("*")
    .eq("bar_code", parseInt(params.product));
  if (product === null || product[0] === undefined) {
    return {
      status: 303,
      headers: { location: `/products/${params.product}/add` },
    };
  }
  return {
    status,
    body: {
      product: product.pop(),
    },
  };
};

export const PATCH: RequestHandler = async ({ request, params }) => {
  const formData = await request.formData();
  await supabaseServerClient(request)
    .from("Food")
    .update({
      name: formData.get("name"),
      fat: formData.get("fat"),
      protein: formData.get("protein"),
      carbohydrates: formData.get("carbohydrates"),
    })
    .eq("bar_code", params.product);

  return {
    status: 200,
  };
};

export const DELETE: RequestHandler = async ({ params, request }) => {
  await supabaseServerClient(request).from("Food").delete().eq(
    "bar_code",
    params.product,
  );
  return {
    status: 200,
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
