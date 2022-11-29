<div class="grid place-items-center">
	<div
		class="grid w-full grid-cols-2 gap-4 rounded-md border-2 border-orange-200 p-4 dark:border-orange-400 sm:w-72">
		<a
			href="/auth/signup"
			class="col-span-1 rounded-md bg-orange-300 p-2 text-center dark:bg-orange-500">Sign Up</a>
		<a
			href="/auth/signin"
			class="col-span-1 rounded-md bg-orange-300 p-2 text-center dark:bg-orange-500">Sign In</a>
		<slot />
	</div>
</div>
