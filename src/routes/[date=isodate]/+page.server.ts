import prisma from '$lib/db'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async (event) => {
	const date = new Date(event.params.date)
	const servings = await prisma.meal.findMany({
		where: {
			createdAt: {
				gte: new Date(date.setHours(0, 0, 0, 0)).toISOString(),
				lte: new Date(date.setHours(23, 59, 59, 999)).toISOString()
			}
		},
		include: {
			Food: true
		}
	})
	return { servings }
}
export const actions: Actions = {
	async delete(event) {
		const formData = await event.request.formData()
		const servingId = formData.get('servingId') as string
		await prisma.meal.delete({
			where: { mealId: parseInt(servingId) }
		})
	}
}
