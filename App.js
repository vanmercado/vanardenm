const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
	threshold: 1,
	rootMargin: '0px 0px -40px 0px',
};

const appearOnScroll = new IntersectionObserver(function (entries) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear');
		}
	});
}, appearOptions);

faders.forEach((fader) => {
	appearOnScroll.observe(fader);
});
