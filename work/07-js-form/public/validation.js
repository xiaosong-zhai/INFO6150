"use strict";
(function () {
    const formEl = document.querySelector(".main__form");
    const nameGroupEl = document.querySelector(".register-name");
    const nameInputEl = document.querySelector(".register-name__input");
    // const emailGroupEl = document.querySelector(".register-email");
    // const confirmGroupEl = document.querySelector(".register-confirm");
    const emailInputEl = document.querySelector(".register-email__input");
    const confirmInputEl = document.querySelector(".register-confirm__input");
    const emailErrEl = document.querySelector(".register-email__error");
    const confirmErrEl = document.querySelector(".register-confirm__error");

    nameInputEl.addEventListener('input',(e) => {
        if (!nameInputEl.value ){
            nameGroupEl.classList.add('register-name__invalid');
        }else {
            nameGroupEl.classList.remove('register-name__invalid');
        }
    })

    function showEmailError(showError) {
        if (showError) {
            emailErrEl.innerText = "This Filed must be filled in";
        }else {
            emailErrEl.innerText = "";
        }
    }

    function showConfirmError(showError) {
        if (showError) {
            confirmErrEl.innerText = "This Filed must be filled in";
        }else {
            confirmErrEl.innerText = "";
        }
    }

    emailInputEl.addEventListener('input',(e) =>{
        const showError = !emailInputEl.value;
        showEmailError(showError);

    })

    emailInputEl.addEventListener('blur',(e) => {
        const emailRegex = /^(\w{3,20}(\.\w{3.20}){0,2}@[a-zA-Z0-9]{2,20}(\.[a-zA-Z0-0]{2,20}){1,2})+$/;
        const email = document.querySelector(".register-email__input").value.trim();
        if (!emailRegex.test(email)){
            emailErrEl.innerText = "The email is invalid!";
        }else {
            emailErrEl.innerText = "";
        }
    })

    confirmInputEl.addEventListener('input',(e) =>{
        const showError = !confirmInputEl.value;
        showConfirmError(showError);
    })



    formEl.addEventListener('submit', (e) => {
        let isInvalid = false;
        nameGroupEl.classList.remove('register-name__invalid');

        if (!nameInputEl.value ){
            nameGroupEl.classList.add('register-name__invalid');
            isInvalid = true;
        }

        const showError = !emailInputEl.value;
        showEmailError(showError);
        isInvalid = isInvalid || showError;

        const showConfError = !confirmInputEl.value;
        showConfirmError(showError);
        isInvalid = isInvalid || showConfError;

        const email = document.querySelector(".register-email__input").value.trim();
        const confirmEmail = document.querySelector(".register-confirm__input").value.trim();
        if ( confirmEmail !== email ){
            confirmErrEl.innerText = "The email do not match";
            isInvalid = true;
        }else {
            confirmErrEl.innerText = "";
        }

        if ( isInvalid ) {
            e.preventDefault();
        }
        })
})();