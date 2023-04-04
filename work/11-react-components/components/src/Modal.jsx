import { useState,useRef } from "react";
import Button from './Button';

function Modal() {
    const dialogRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenDialog = () => {
        setIsOpen(true);
    };

    const handleCloseDialog = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button onClick={handleOpenDialog}>Open</Button>
            <dialog ref={dialogRef} open={isOpen} >
                dialog modal was opened
                <Button
                    type="submit"
                    visual="link"
                    onClick={handleCloseDialog}
                >
                    Close
                </Button>
            </dialog>
        </>
    );
}

export default Modal;