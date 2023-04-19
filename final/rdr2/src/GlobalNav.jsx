import menu from "./menu";
import './GlobalNav.css'
import './Icon.css'
import { useState } from 'react';

function GlobalNav({ className, setPage }){
    const [ showMenu, setShowMenu ] = useState(false);
    const list = menu.map( item => {
        return (
            <li className="global-nav__item" key={item.name}>
                <a
                    className="global-nav__link"
                    href={item.path}
                    aria-label={item.label}
                    onClick={ (e) => {
                        e.preventDefault();
                        setPage(item.name)
                    }}
                >
                    <span className={item.icon}></span>
                    {item.name}
                </a>
            </li>
        );
    });

    const menuClass = showMenu ? 'global-nav__list--open' : '';
    return(
        <nav className={`global-nav ${className}`}>
            <button
                className="global-nav__button"
                aria-label="tap here to toggle menu"
                onClick={ () => {
                    setShowMenu(!showMenu);
                }}
            >
                {showMenu ? "\u2303" : "\u2630"}
            </button>
            <ul className={`global-nav__list ${menuClass}`}>
                {list}
            </ul>
        </nav>
    );
}
export default GlobalNav;