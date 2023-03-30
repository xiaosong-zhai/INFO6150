import Home from './Home';
import About from './About';
import Panel from './Panel';

function Main({page}){
    return(
        <main>
            {(page ==='Home') && <Home/>}
            {(page ==='About') && <About/>}
            {(page ==='Panel') && <Panel/>}
        </main>
    );
}

export default Main;