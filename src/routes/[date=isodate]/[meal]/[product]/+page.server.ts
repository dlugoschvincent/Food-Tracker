import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { invalid } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async (event) => {
	const { supabaseClient } = await getSupabase(event)
	const { data: product } = await supabaseClient
		.from('Food')
		.select('*')
		.eq('bar_code', event.params.product)
	return { product }
}

export const actions: Actions = {
	async add(event) {
		const { supabaseClient } = await getSupabase(event)
		const formData = await event.request.formData()
		await supabaseClient.from('Food').upsert({
			bar_code: parseInt(event.params.product),
			name: formData.get('name') as string,
			fat: parseInt(formData.get('fat') as string),
			protein: parseInt(formData.get('protein') as string),
			carbohydrates: parseInt(formData.get('carbohydrates') as string)
		})
	},
	async eat(event) {
		const { session, supabaseClient } = await getSupabase(event)
		const date = new Date(event.params.date)
		const formData = await event.request.formData()
		if (!session?.user.id) {
			return invalid(401)
		}
		await supabaseClient.from('UserAteFood').insert({
			food_id: parseInt(formData.get('bar_code') as string),
			meal: formData.get('meal') as string,
			grams: parseInt(formData.get('grams') as string),
			user_id: session?.user.id,
			created_at: date.toISOString()
		})
	}
}
