import './App.css';
import {useState} from 'react';
import Header from './Header';
import Main from './Main'
import Theme from './Theme';
import Footer from "./Footer";


function App() {

    const [page, setPage] = useState('Home');
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
            <Header setPage={setPage}/>
            <Main page={page}/>
            <Theme isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
            <Footer setPage={setPage}/>
        </div>
    );
}

export default App;
