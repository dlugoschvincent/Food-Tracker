import prisma from '$lib/db'
import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load = (async ({ params }) => {
	const product = await prisma.food.findFirst({
		where: { barCode: parseInt(params.barcode) }
	})

	if (product) {
		return { product }
	}

	throw redirect(301, `/product/create/${params.barcode}`)
}) satisfies PageServerLoad
