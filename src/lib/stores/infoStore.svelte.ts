class Info {
	isShown = $state(false)
	toggleInfo() {
		this.isShown = !this.isShown
	}
}
export const info = new Info()
