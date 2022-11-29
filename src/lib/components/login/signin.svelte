<form
	method="post"
	class="grid gap-4 col-span-2">
	<div class="col-span-2">
		<label
			for="email"
			class="block text-sm font-medium text-zinc-900 dark:text-white mb-2">E-Mail</label>
		<div class="relative">
			<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<div class="i-material-symbols:alternate-email w-5 h-5 text-zinc-500 dark:text-zinc-400" />
			</div>
			<input
				class="input-text"
				name="email"
				type="email"
				id="email"
				required
				placeholder="E-Mail" />
		</div>
	</div>
	<div class="col-span-2">
		<label
			for="password"
			class="block text-sm font-medium text-zinc-900 dark:text-white mb-2">Password</label>
		<div class="relative">
			<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<div class="i-material-symbols:key w-5 h-5 text-zinc-500 dark:text-zinc-400" />
			</div>
			<input
				class="input-text"
				name="password"
				type="password"
				id="password"
				required
				placeholder="Password" />
		</div>
	</div>
	<button
		class="rounded-md bg-orange-300 p-2 col-span-2 dark:bg-orange-500"
		type="submit">
		Sign In
	</button>
</form>
