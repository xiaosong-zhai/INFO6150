"use strict";
(function () {
    const modals = [
        {
            modalSelector: '.modal',
            openSelector: '.card__link',
            closeSelector: '.close'
        },
        {
            modalSelector: '.modal2',
            openSelector: '.card__link2',
            closeSelector: '.close2'
        },
        {
            modalSelector: '.modal3',
            openSelector: '.card__link3',
            closeSelector: '.close3'
        },
        {
            modalSelector: '.modal4',
            openSelector: '.card__link4',
            closeSelector: '.close4'
        },
        {
            modalSelector: '.modal5',
            openSelector: '.card__link5',
            closeSelector: '.close5'
        },
        {
            modalSelector: '.modal6',
            openSelector: '.card__link6',
            closeSelector: '.close6'
        }

    ];

    function setModal(modal) {
        const modalEl = document.querySelector(modal.modalSelector);
        const openEl = document.querySelector(modal.openSelector);
        const closeEl = document.querySelector(modal.closeSelector);

        openEl.addEventListener('click', () => {
            modalEl.showModal();
        });

        closeEl.addEventListener('click', () => {
            modalEl.close();
        });
    }

    modals.forEach(modal => {
        setModal(modal);
    });



    function validateForm(formEl) {
        const emailInputEl = formEl.querySelector(".register-email__input");
        const confirmInputEl = formEl.querySelector(".register-confirm__input");
        const emailErrEl = formEl.querySelector(".register-email__error");
        const confirmErrEl = formEl.querySelector(".register-confirm__error");

        function showEmailError(showError) {
            if (showError) {
                emailErrEl.innerText = "This Field must be filled in";
            } else {
                emailErrEl.innerText = "";
            }
        }

        emailInputEl.addEventListener("input", (e) => {
            const showError = !emailInputEl.value;
            showEmailError(showError);
        });

        function showConfirmError(showConfError) {
            if (showConfError) {
                confirmErrEl.innerText = "This Field must be filled in";
            } else {
                confirmErrEl.innerText = "";
            }
        }

        confirmInputEl.addEventListener("input", (e) => {
            const showError = !confirmInputEl.value;
            showConfirmError(showError);
        });

        formEl.addEventListener("submit", (e) => {
            let isInvalid = false;

            const showError = !emailInputEl.value;
            showEmailError(showError);
            isInvalid = isInvalid || showError;

            const showConfError = !confirmInputEl.value;
            showConfirmError(showConfError);
            isInvalid = isInvalid || showConfError;

            const emailRegex = /^(\w{3,20}(\.\w{3.20}){0,2}@)/;
            const email = emailInputEl.value.trim();
            const confirmEmail = confirmInputEl.value.trim();
            if (!emailRegex.test(email)) {
                emailErrEl.innerText = "The valid email address must include @";
                isInvalid = true;
            } else {
                emailErrEl.innerText = "";
            }

            if (confirmEmail !== email) {
                confirmErrEl.innerText = "The email do not match";
                isInvalid = true;
            } else {
                confirmErrEl.innerText = "";
            }

            if (isInvalid) {
                e.preventDefault();
            }
        });
    }

    const formEls = document.querySelectorAll(".main__form");
    formEls.forEach((formEl) => {
        validateForm(formEl);
    });

})();