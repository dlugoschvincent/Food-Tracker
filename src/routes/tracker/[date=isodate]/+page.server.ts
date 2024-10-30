import prisma from '$lib/db'
import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load = (async (event) => {
	const session = await event.locals.auth()
	const userId = session?.user?.id
	const date = new Date(event.params.date)
	const servings = await prisma.meal.findMany({
		where: {
			userId: userId,
			createdAt: {
				gte: new Date(date.setHours(0, 0, 0, 0)).toISOString(),
				lte: new Date(date.setHours(23, 59, 59, 999)).toISOString()
			}
		},
		include: {
			food: true
		}
	})
	return { servings }
}) satisfies PageServerLoad

export const actions: Actions = {
	async delete(event) {
		const formData = await event.request.formData()
		const session = await event.locals.auth()
		const userId = session?.user?.id

		if (!userId) {
			redirect(303, '/signin')
		}

		const servingId = formData.get('servingId') as string
		await prisma.meal.delete({
			where: { mealId: parseInt(servingId), userId: userId }
		})
	}
}
