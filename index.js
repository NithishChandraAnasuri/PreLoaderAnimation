function startLoader() {
  let counterElement = document.querySelector(".counter");

  gsap.to(counterElement, {
    duration: Math.random() * 3, // Random duration between 2-5 seconds
    textContent: 100, // Animates from 0 to 100
    roundProps: "textContent", // Ensures whole numbers
    ease: "power2.out", // Smooth easing effect
  });
}

startLoader();

// Fade out the counter
gsap.to(".counter", 0.25, {
  delay: 3.5,
  opacity: 0,
});

// Collapse bars
gsap.to(".bar", 1.5, {
  delay: 3.5,
  height: 0,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

// Move letters up
gsap.to(".h1", 1.5, {
  delay: 4,
  y: 700,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

// Move hero section up
gsap.to(".hero", {
  delay: 4.5,
  y: 900,
  opacity: 1, // Keep it slightly visible while moving up
  ease: "power4.inOut",
});

// Bounce in the text and image after they move up
gsap.from(".header .h1", {
  delay: 5,
  y: 300,
  opacity: 0,
  duration: 1.5,
  ease: "bounce.out",
  stagger: {
    amount: 0.5,
  },
});

gsap.to(".hero", {
  delay: 5.0,
  y: 0,
  opacity: 0.7, // Fully visible
  duration: 1,
  ease: "bounce.out",
});
