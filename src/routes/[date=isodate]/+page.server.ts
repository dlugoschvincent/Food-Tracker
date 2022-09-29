import { withAuth } from '@supabase/auth-helpers-sveltekit'

import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = withAuth(async ({ getSupabaseClient, session, params }) => {
  const date = new Date(params.date)
  const { data: servings } = await getSupabaseClient()
    .from('UserAteFood')
    .select(`grams, meal_id, meal, Food(name, fat, protein, carbohydrates)`)
    .gte('created_at', new Date(date.setHours(0, 0, 0, 0)).toISOString())
    .lte('created_at', new Date(date.setHours(23, 59, 59, 999)).toISOString())
  return { servings }
})
export const actions: Actions = {
  delete: withAuth(async ({ getSupabaseClient, request }) => {
    const formData = await request.formData()
    const servingId = formData.get('servingId') as string
    await getSupabaseClient().from('UserAteFood').delete().eq('meal_id', servingId)
  })
}
