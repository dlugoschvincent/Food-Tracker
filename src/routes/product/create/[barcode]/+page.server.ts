import prisma from '$lib/db'
import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'


export const load = (async ({ params }) => {
	const product = await prisma.food.findFirst({
		where: { barCode: parseInt(params.barcode) }
	})

	if (product) {
		throw redirect(301, `/product/${params.barcode}`)
	}
}) satisfies PageServerLoad

export const actions: Actions = {
	async create(event) {
		const formData = await event.request.formData()
		await prisma.food.create({
			data: {
				barCode: parseInt(event.params.barcode),
				name: formData.get('name') as string,
				fat: parseInt(formData.get('fat') as string),
				protein: parseInt(formData.get('protein') as string),
				carbohydrates: parseInt(formData.get('carbohydrates') as string)
			}
		})
	}
}
