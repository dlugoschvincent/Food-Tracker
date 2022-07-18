import {
  supabaseServerClient,
  withApiAuth,
} from "@supabase/auth-helpers-sveltekit";
import type { definitions } from "types/database";

import type { RequestHandler } from "./__types";

export const GET: RequestHandler = async ({ params, request }) => {
  const { data: product, status } = await supabaseServerClient(request)
    .from<definitions["Food"]>("Food")
    .select("*")
    .eq("bar_code", parseInt(params.product));
  return {
    status,
    body: {
      product,
    },
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

export const POST: RequestHandler = async ({ request, params }) => {
  const formData = await request.formData();
  const { status } = await supabaseServerClient(request)
    .from("Food")
    .upsert({
      bar_code: params.product,
      name: formData.get("name"),
      fat: formData.get("fat"),
      protein: formData.get("protein"),
      carbohydrates: formData.get("carbohydrates"),
    });

  return {
    status,
  };
};

export const PUT: RequestHandler = async ({ params, request, locals }) =>
  withApiAuth({ user: locals.user }, async () => {
    const date = new Date(params.date);
    const formData = await request.formData();

    const { status } = await supabaseServerClient(request)
      .from("UserAteFood").insert({
        food_id: params.product,
        meal: params.meal,
        grams: formData.get("grams") as string,
        user_id: locals.user?.id,
        created_at: date,
      });

    return { status:303, headers:{location:`/${params.date}`} };
  });
