import {
  supabaseServerClient,
  withApiAuth,
} from "@supabase/auth-helpers-sveltekit";
import type { definitions } from "types/database";

import type { RequestHandler } from "./__types";

export const GET: RequestHandler = async ({ params, locals, request }) =>
  withApiAuth({ user: locals.user, redirectTo: "/auth/signin" }, async () => {
    const date = new Date(params.date);
    const { data: servings } = await supabaseServerClient(request)
      .from<definitions["UserAteFood"] & { Food: definitions["Food"] }>(
        "UserAteFood",
      )
      .select(`grams, meal_id, meal, Food(name)`)
      .gte("created_at", new Date(date.setHours(0, 0, 0, 0)).toISOString())
      .lte(
        "created_at",
        new Date(date.setHours(23, 59, 59, 999)).toISOString(),
      );
    return {
      status: 200,
      body: { servings },
    };
  });

export const DELETE: RequestHandler = async ({ locals, request, url }) =>
  withApiAuth({ user: locals.user }, async () => {
    const formData = await request.formData();
    const servingId = formData.get("servingId") as string;
    await supabaseServerClient(request)
      .from<definitions["UserAteFood"] & { Food: definitions["Food"] }>(
        "UserAteFood",
      )
      .delete()
      .eq("meal_id", servingId);
    return { status: 304, headers: { location: url.pathname } };
  });

export const POST: RequestHandler = async ({ params, request, locals }) =>
  withApiAuth({ user: locals.user }, async () => {
    const date = new Date(params.date);
    const formData = await request.formData();

    const { status } = await supabaseServerClient(request)
      .from("UserAteFood")
      .insert({
        food_id: formData.get("bar_code"),
        meal: formData.get("meal"),
        grams: formData.get("grams") as string,
        user_id: locals.user?.id,
        created_at: date,
      });

    return { status };
  });
