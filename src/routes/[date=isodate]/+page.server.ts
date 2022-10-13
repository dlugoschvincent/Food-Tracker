import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async (event) => {
  const date = new Date(event.params.date)
  const { supabaseClient } = await getSupabase(event)
  const { data: servings } = await supabaseClient
    .from('UserAteFood')
    .select(`grams, meal_id, meal, Food(name, fat, protein, carbohydrates)`)
    .gte('created_at', new Date(date.setHours(0, 0, 0, 0)).toISOString())
    .lte('created_at', new Date(date.setHours(23, 59, 59, 999)).toISOString())
  return { servings }
}
export const actions: Actions = {
  async delete(event) {
    const formData = await event.request.formData()
    const servingId = formData.get('servingId') as string
    const { supabaseClient } = await getSupabase(event)
    await supabaseClient.from('UserAteFood').delete().eq('meal_id', servingId)
  }
}
