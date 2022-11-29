<form
	method="post"
	class="col-span-2 grid gap-4">
	<div class="col-span-2">
		<label
			for="email"
			class="mb-2 block text-sm font-medium text-zinc-900 dark:text-white">E-Mail</label>
		<div class="relative">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<div class="i-material-symbols:alternate-email h-5 w-5 text-zinc-500 dark:text-zinc-400" />
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
			class="mb-2 block text-sm font-medium text-zinc-900 dark:text-white">Password</label>
		<div class="relative">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<div class="i-material-symbols:key h-5 w-5 text-zinc-500 dark:text-zinc-400" />
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
		class="col-span-2 rounded-md bg-orange-300 p-2 dark:bg-orange-500"
		type="submit">
		Sign In
	</button>
</form>
