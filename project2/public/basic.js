"use strict";
(function () {
    const topnavEl = document.querySelector('.topnav');
    const navLinks = document.querySelectorAll('.topnav__menu a');

    topnavEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav__button')) {
            const expanded = e.target.getAttribute('aria-expanded');
            if (expanded === "false") {
                e.target.setAttribute('aria-expanded', 'true');
            }else {
                e.target.setAttribute('aria-expanded', 'false');
            }

            navLinks.forEach(link => {
                if (expanded === "false") {
                    link.setAttribute('tabindex', '0');
                } else {
                    link.setAttribute('tabindex', '-1');
                }
            });

            const buttonEl = e.target.closest('.nav__menu');
            buttonEl.classList.toggle('nav__menu--open');
        }
    })



})();
