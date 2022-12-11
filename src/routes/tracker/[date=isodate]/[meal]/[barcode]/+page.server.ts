import prisma from '$lib/db'
import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load = (async ({ params }) => {
	const product = await prisma.food.findFirst({
		where: { barCode: parseInt(params.barcode) }
	})

	if (product) {
		return { product }
	}

	throw redirect(301, `/product/create/${params.barcode}`)
}) satisfies PageServerLoad

export const actions: Actions = {
	async eat(event) {
		const formData = await event.request.formData()
		const userId = '8755bc24-25de-4de7-9a47-ec196b804265'
		await prisma.user.upsert({
			where: {
				id: userId
			},
			update: {},
			create: {
				id: userId
			}
		})
		await prisma.meal.create({
			data: {
				barCode: parseInt(event.params.barcode),
				type: event.params.meal,
				grams: parseInt(formData.get('grams') as string),
				userId: userId,
				createdAt: new Date(event.params.date).toISOString()
			}
		})
		throw redirect(301, `/tracker/${event.params.date}`)
	}
}
