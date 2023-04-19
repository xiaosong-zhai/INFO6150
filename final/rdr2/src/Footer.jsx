import './Footer.css'
import Privacy from './Privacy';

function Footer( { setPage } ){
    return(
        <footer className="footer">
            <h2 className="footer__title">
                <p>
                    All information is securely stored and will not be shared with any third parties. See our {'\u00A0'}
                <a
                    className="footer__link"
                    href="/privacy-policy"
                    aria-label="tap here to go to privacy page"
                    onClick={(e) => {
                        e.preventDefault();
                        setPage('Privacy')
                    }
                }
                >
                    Privacy Policy
                </a>
                </p>
            </h2>
            <h3 className="footer__contact-title">
                Contact Me:
            </h3>
            <ul className="footer__contact-list">
                <li className="footer__contact-item">
                    <a className="footer__contact-link"
                       href="https://github.com/xiaosong-zhai"
                       aria-label="tap here to my Github page"
                       target="_blank"
                    >
                        Github
                    </a>
                </li>
                <li className="footer__contact-item">
                    <a className="footer__contact-link"
                       href="https://www.linkedin.com/in/xiaosong-zhai-085b6524b/"
                       aria-label="tap here to my linkedin page"
                       target="_blank"
                    >
                        Linkedin
                    </a>
                </li>
                <li className="footer__contact-item">
                    <a className="footer__contact-link"
                       href="https://twitter.com/"
                       aria-label="tap here to my Twitter page"
                       target="_blank"
                    >
                        Twitter
                    </a>
                </li>
                <li className="footer__contact-item">
                    <a className="footer__contact-link"
                       href="https://www.instagram.com/"
                       aria-label="tap here to my Instagram page"
                       target="_blank"
                    >
                        Instagram
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;