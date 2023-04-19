import './Play.css';
import { useState, useRef } from 'react';

function Play() {

    const [showError, setShowError] = useState(false);
    const errorClass = showError ? 'register-name__invalid' : '';

    const [isInvalid, setIsInvalid] = useState(true);

    const nameValidate = (e) => {
        if (e.target.value !== "") {
            setShowError(false);
            setIsInvalid(false);
        }else {
            setShowError(true);
            setIsInvalid(true);
        }
    };


    const registerSuccess = useRef();

    const formValidate = (e) => {
        e.preventDefault();
        if (!isInvalid) {
            registerSuccess.current.showModal();
        } else {
            setShowError(true);
        }
    };

    const [platform, setPlatform] = useState("");

    const platformChange = (e) => {
        setPlatform(e.target.value);
    };

    const secondDropdown = () => {
        if (platform === "Consoles") {
            return (
                <select name="console" id="console" required>
                    <option value="Play Station">Play Station</option>
                    <option value="Xbox">Xbox</option>
                </select>
            );
        } else if (platform === "PC") {
            return (
                <select name="pc" id="pc" required>
                    <option value="steam">Steam</option>
                    <option value="epic">Epic</option>
                    <option value="Rockstar">Rockstar</option>
                </select>
            );
        } else {
            return (
                <select>
                    <option value=""></option>
                </select>
            )
        }
    };

    return (
        <div className="play">
            <a href="#maincontent" className="skiptomaincontent" aria-label="tap here to the top main content">skip to
                main content</a>

            <form method="post" className="main__form" id="maincontent">
                <h2 className="main__form__title">Be Friends! Play Red Dead Redemption 2 Together</h2>
                <div className="register__note">* are required</div>

                <div className={`register-name ${errorClass}`}>
                    <label htmlFor="name">UserName<span className="register-name__required"> *</span> : </label>
                    <span className="register-name__error">Please let me know your username</span>
                    <input name="Name"
                           className="register-name__input"
                           id="name"
                           type="text"
                           onChange={nameValidate}
                    />
                </div>

                <div className="register__dropdown--hardware register-dropdown">
                    <label htmlFor="platform">Hardware : </label>
                    <select name="platform" id="platform" value={platform} onChange={platformChange} required>
                        <option value="">Please select</option>
                        <option value="Consoles">Consoles</option>
                        <option value="PC">PC</option>
                    </select>
                </div>

                <div className="register__dropdown register-dropdown">
                    <label htmlFor="console-pc">Platform : </label>
                    {secondDropdown()}
                </div>

                <input type="submit"
                       value="Register"
                       className="register__button"
                       onClick={formValidate}
                />
            </form>

            <dialog ref={registerSuccess} className="dialog">
                <h3 className="dialog-title">Registration Successful!</h3>
                <p>Thank you for registering to play Red Dead Redemption 2 together.<br/>
                    I will add you as friend</p>
                <button
                    className="dialog-close"
                    onClick={ () =>
                        registerSuccess.current.close()
                }>
                    OK
                </button>
            </dialog>

        </div>
    );
}

export default Play;