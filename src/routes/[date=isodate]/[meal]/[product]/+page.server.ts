import { supabaseClient } from '$lib/db'
import { withAuth } from '@supabase/auth-helpers-sveltekit'
import type { definitions } from 'types/database'

import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const { data: product } = await supabaseClient
    .from<definitions['Food']>('Food')
    .select('*')
    .eq('bar_code', params.product)
  return { product }
}

export const actions: Actions = {
  add: async ({ request, params }) => {
    const formData = await request.formData()
    await supabaseClient.from('Food').upsert({
      bar_code: params.product,
      name: formData.get('name') as string,
      fat: parseInt(formData.get('fat') as string),
      protein: parseInt(formData.get('protein') as string),
      carbohydrates: parseInt(formData.get('carbohydrates') as string)
    })
  },

  eat: withAuth(async ({ session, getSupabaseClient, request, params }) => {
    const date = new Date(params.date)
    const formData = await request.formData()
    await getSupabaseClient().from('UserAteFood').insert({
      food_id: parseInt(formData.get('bar_code') as string),
      meal: formData.get('meal') as string,
      grams: parseInt(formData.get('grams') as string),
      user_id: session.user?.id,
      created_at: date.toISOString()
    })
  }),
}
