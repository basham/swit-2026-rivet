let slideCounter = 0;

export function getSlideId() {
	slideCounter += 1;
	return `slide-${slideCounter}`;
}

if (import.meta.hot) {
	// Reset counter during hot module reload.
	import.meta.hot.on("astro:routes-updated", () => {
		slideCounter = 0;
	});
}
