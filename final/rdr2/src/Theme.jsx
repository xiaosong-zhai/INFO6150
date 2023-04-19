import './Theme.css'

function Theme({ isDarkMode, setIsDarkMode }) {

    return (
        <>
            <button
                className="theme__switch"
                aria-label="tap here to change theme"
                onClick={() => {
                    setIsDarkMode(!isDarkMode);
                }}
            >
                {isDarkMode ? "\u2609" : "\u263D"}
            </button>
        </>
    );
}

export default Theme;