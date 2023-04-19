import Home from './Home';
import Gallery from './Gallery';
import Comments from './Comments';
import Privacy from './Privacy';
import Play from './Play';

function Main({page}){
    return(
        <main>
            {(page ==='Home') && <Home/>}
            {(page ==='Gallery') && <Gallery/>}
            {(page ==='Comments') && <Comments/>}
            {(page ==='Privacy') && <Privacy/>}
            {(page ==='Play') && <Play/>}
        </main>
    );
}

export default Main;