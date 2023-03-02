"use strict";
(function () {
    const buttonEl = document.querySelector("button");

    buttonEl.addEventListener("click", function () {
        console.log("open the menu");
        const menuEL = document.querySelector(".topnav__menu");
        menuEL.classList.toggle("open");

    });

})();