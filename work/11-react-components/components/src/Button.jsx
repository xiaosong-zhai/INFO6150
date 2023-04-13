

function Button({children,
                className,
                disabled=false,
                onClick,
                type="button",
                visual="button",
                buttonClicked,
                isOpen,
                setIsOpen,
 }) {
    let buttonClass = "button";
    if (visual === "link") {
        buttonClass = "button-link";
        }

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        if (visual === "modal") {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div>
            <button
                className = {`${buttonClass} ${className}`}
                disabled = {disabled}
                type={type}
                onClick = {handleClick}
            >
                {children}
            </button >
            {buttonClicked && <p>{children} was clicked</p>}
        </div>
    );
}
export default Button;