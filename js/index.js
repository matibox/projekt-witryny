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

// GSAP ANIMATIONS

// 1. section animations
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

const headings = gsap.utils.toArray('.design__heading');
const articles = gsap.utils.toArray('.design__article');
const img1 = gsap.utils.toArray('.design__img--p');
const img2 = gsap.utils.toArray('.design__img--o');
const tl = gsap.timeline();
const tl2 = gsap.timeline();
const tl3 = gsap.timeline();

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

// 2. horizontal scrolling

tl.from('.horizontal__sec1 h1', { y: 200, opacity: 0, duration: 4 })
    .from('.horizontal__article', {
        xPercent: -100,
        opacity: 0,
        duration: 5,
        stagger: 4,
    })
    .to('.horizontal', { x: -window.innerWidth, duration: 5 })
    .from('.horizontal__sec2 h1', { y: 200, opacity: 0, duration: 4 })
    .from('.horizontal__img', {
        xPercent: 100,
        opacity: 0,
        duration: 5,
        stagger: 3,
    })
    .to('.horizontal', { x: -window.innerWidth * 2, duration: 5 })
    .from('.horizontal__sec3 h2', { opacity: 0, scale: 3, duration: 5 });

ScrollTrigger.create({
    animation: tl,
    trigger: '.horizontal',
    start: 'center center',
    end: '+=4000',
    scrub: true,
    pin: true,
});

// 3. on page load
const subBefore = CSSRulePlugin.getRule('.hero__subtitle-underline::before');
const btnBefore = CSSRulePlugin.getRule('.hero__button::before');

tl2.fromTo(
    '.hero__title',
    { x: -600, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.5, ease: Power4.easeOut }
)
    .from('.hero__subtitle', {
        xPercent: 100,
        opacity: 0,
        ease: Power4.easeOut,
    })
    .fromTo(
        subBefore,
        { width: 0 },
        { width: '100%', duration: 0.75, ease: Power4.easeOut }
    )
    .from('.hero__button-wrapper', { y: 50, opacity: 0, duration: 1 })
    .fromTo(
        btnBefore,
        { width: 0 },
        { width: '70px', duration: 0.25, ease: Power3.easeOut }
    )
    .from('.header__link', {
        ease: Power3.easeOut,
        stagger: 0.5,
        duration: 1,
        opacity: 0,
    });
