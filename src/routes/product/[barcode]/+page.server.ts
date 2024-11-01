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

	const meal = url.searchParams.get('meal')
	const date = url.searchParams.get('date')
	if (meal && date) {
		redirect(301, `/product/create/${params.barcode}?date=${date}&meal=${meal}`)
	}
	redirect(301, `/product/create/${params.barcode}`)
}) satisfies PageServerLoad

export const actions: Actions = {
	async eat(event) {
		const formData = await event.request.formData()
		const session = await event.locals.auth()
		const userId = session?.user?.id
		if (!userId) {
			redirect(303, '/signin')
		}
		const meal = formData.get('meal') as string
		const date = formData.get('date') as string
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
		redirect(301, `/tracker/${date}`)
	}
	// },
	// async delete(event) {
	// 	await prisma.food.delete({ where: { barCode: parseInt(event.params.barcode) } })
	// }
}
