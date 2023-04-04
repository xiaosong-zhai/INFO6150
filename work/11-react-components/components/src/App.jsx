import './App.css';
import Button from './Button';
import Modal from './Modal';
import { useState } from "react";

function App() {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [linkButtonClicked, setLinkButtonClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(!buttonClicked);
    };
    const handleLinkButtonClick = () => {
        setLinkButtonClicked(!linkButtonClicked)
    }

  return (
    <div className="app">
          <Button
              visual = "link"
              onClick={handleLinkButtonClick}
              buttonClicked={linkButtonClicked}
              setButtonClicked={setLinkButtonClicked}
          >link-button
          </Button>
          <Button
              visual = "button"
              onClick={handleButtonClick}
              buttonClicked={buttonClicked}
              setButtonClicked={setButtonClicked}
          >
              button
          </Button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
