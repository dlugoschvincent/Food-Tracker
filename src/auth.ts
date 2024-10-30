import prisma from "$lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { SvelteKitAuth } from "@auth/sveltekit"
import Keycloak from "@auth/sveltekit/providers/keycloak"


export const { handle, signIn, signOut } = SvelteKitAuth({
	adapter: PrismaAdapter(prisma),
	providers: [Keycloak],
	useSecureCookies: false,
	trustHost: true,
	callbacks: {
		session({ session, user }) {
			session.user.id = user.id
			return session
		},
	},
})
