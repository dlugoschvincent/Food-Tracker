import prisma from '$lib/db'
import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load = (async ({ params, url }) => {
	const product = await prisma.food.findFirst({
		where: { barCode: parseInt(params.barcode) }
	})

	if (product) {
		return { product }
	}

	throw redirect(
		301,
		`/product/create/${params.barcode}?date=${url.searchParams.get(
			'date'
		)}&meal=${url.searchParams.get('meal')}`
	)
}) satisfies PageServerLoad

export const actions: Actions = {
	async eat(event) {
		const formData = await event.request.formData()
		const userId = '8755bc24-25de-4de7-9a47-ec196b804265'
		const meal = formData.get('meal') as string
		const date = formData.get('date') as string
		await prisma.user.upsert({
			where: {
				id: userId
			},
			update: {},
			create: {
				id: userId
			}
		})
		if (meal && date) {
			await prisma.meal.create({
				data: {
					barCode: parseInt(event.params.barcode),
					type: meal,
					grams: parseInt(formData.get('grams') as string),
					userId: userId,
					createdAt: new Date(date).toISOString()
				}
			})
		}
		throw redirect(301, `/tracker/${date}`)
	}
}
