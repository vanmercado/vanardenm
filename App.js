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

TweenMax.staggerFrom("nav ul li", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.08)

TweenMax.staggerFrom(".small-icon", 2, {
    opacity: 0,
    // delay: 3.2,
    delay: 1.3,
    y: 40,
    ease: Expo.easeInOut
}, 0.2)
