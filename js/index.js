// Hero scroll button handler
const heroScroll = () => {
    const btn = document.querySelector('.hero__button');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const el = e.target;
        const href = el.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop - 100,
            behavior: 'smooth',
        });
    });
};

heroScroll();

// Gsap animations
gsap.registerPlugin(ScrollTrigger);

const headings = gsap.utils.toArray('.design__heading');
const articles = gsap.utils.toArray('.design__article');
const img1 = gsap.utils.toArray('.design__img--p');
const img2 = gsap.utils.toArray('.design__img--o');
let tl = gsap.timeline();

headings.forEach((text, i) => {
    gsap.from(text, {
        scrollTrigger: {
            trigger: text,
            // scrub: true,
        },
        y: 100,
        duration: 1,
        opacity: 0,
    });
});

articles.forEach((article, i) => {
    gsap.from(article, {
        scrollTrigger: {
            trigger: article,
        },
        x: 300,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: 'elastic.out(0.5, 0.3)',
    });
});

img1.forEach((image, i) => {
    gsap.from(image, {
        scrollTrigger: {
            trigger: image,
        },
        opacity: 0,
        x: -50,
        delay: 1.5,
        ease: 'back.out(1.7)',
        stagger: 0.75,
    });
});

img2.forEach((image, i) => {
    gsap.from(image, {
        scrollTrigger: {
            trigger: image,
        },
        opacity: 0,
        x: 50,
        delay: 1.5,
        ease: 'back.out(1.7)',
        stagger: 0.75,
    });
});

gsap.timeline({
    scrollTrigger: {
        trigger: '.horizontal',
        start: 'center center',
        end: 'bottom top',
        markers: false,
        scrub: 1,
        pin: true,
    },
})
    .from('.horizontal__heading', { y: 150, opacity: 0 })
    .from('#hor-art-1', { x: innerWidth * 1 })
    .from('#hor-art-2', { x: innerWidth * -1 }, '+=0.5')
    .to('#hor-art-1', { x: -400, opacity: 0 })
    .to('#hor-art-2', { x: 500, opacity: 0 }, '+=0.5');
