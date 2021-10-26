const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__links');
    const navLinks = document.querySelectorAll('.nav__list-item');

    burger.addEventListener('click', () => {
        // toggling nav class
        burger.classList.toggle('burger--open');
        nav.classList.toggle('nav__links--open');

        // animating links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${
                    index / 7
                }s`;
            }
        });
    });
};

navSlide();
