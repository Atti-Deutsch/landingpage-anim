const tl = gsap.timeline({defaults: { ease: "power1.out" } });

/* The elements to animate */
tl.to('.text', { y: '0%', duration: 2, stagger: 0.25 });
tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
tl.to('.intro', { y: '-100%', duration: 1 }, '-=1'); 
/* Navbar opacity startingpoint to endpoint on load */
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1.5});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1.5}, '-=1');
