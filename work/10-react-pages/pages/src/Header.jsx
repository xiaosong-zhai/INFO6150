import GlobalNav from './GlobalNav';
import './Header.css';

function Header({ setPage }){
    return(
        <header className = "header">
            <img
                src="http://placekitten.com/100/100?image=9"
                className="header__logo"
                alt="a logo picture of a cat with 100*100"
            />
            <h1 className="header__title">
                Cats rule the world ?
            </h1>
            <GlobalNav className="header__nav" setPage={setPage}/>
        </header>
    );
}
export default Header;