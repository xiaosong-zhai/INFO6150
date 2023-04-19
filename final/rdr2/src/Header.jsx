import GlobalNav from './GlobalNav';
import './Header.css';
import header__logo from './logo.PNG'

function Header({ setPage }){
    return(
        <header className = "header">
            <img
                src={header__logo}
                className="header__logo"
                alt="a logo of a man named author riding a horse with 50*50"
            />
            <h1 className="header__title">
                The Best Ninth Art
            </h1>
            <GlobalNav className="header__nav" setPage={setPage}/>
        </header>
    );
}
export default Header;