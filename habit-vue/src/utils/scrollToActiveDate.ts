export const scrollToActiveDate = () => {
	// TODO: Figure out why, when clicked, it does not always go to the center
	setTimeout(() => {
		document
			.querySelector('.active')
			?.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
	}, 10);
};
