import type { RequestHandler } from "./__types/[date=isodate]";
import {
  supabaseServerClient,
  withApiAuth,
} from "@supabase/auth-helpers-sveltekit";
import Tracker from "$lib/components/tracker/tracker.svelte";
import type { definitions } from "types/database";

export const get: RequestHandler = async ({ params, locals, request }) =>
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

export const del: RequestHandler = async ({ request, locals, params }) =>
  withApiAuth({ user: locals.user }, async () => {
    await supabaseServerClient(request)
      .from<definitions["UserAteFood"] & { Food: definitions["Food"] }>(
        "UserAteFood",
      )
      .delete()
      .eq("meal_id", id);
  });
