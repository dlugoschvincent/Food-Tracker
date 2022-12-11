import prisma from '$lib/db'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async (event) => {
	const product = await prisma.meal.findFirst({
		where: { barCode: parseInt(event.params.product) }
	})
	return { product }
}

export const actions: Actions = {
	async add(event) {
		const formData = await event.request.formData()
		await prisma.food.create({
			data: {
				barCode: parseInt(event.params.product),
				name: formData.get('name') as string,
				fat: parseInt(formData.get('fat') as string),
				protein: parseInt(formData.get('protein') as string),
				carbohydrates: parseInt(formData.get('carbohydrates') as string)
			}
		})
	},
	async eat(event) {
		const date = new Date(event.params.date)
		const formData = await event.request.formData()
		await prisma.meal.create({
			data: {
				barCode: parseInt(formData.get('bar_code') as string),
				meal: formData.get('meal') as string,
				grams: parseInt(formData.get('grams') as string),
				userId: 'abc',
				createdAt: date.toISOString()
			}
		})
	}
}
