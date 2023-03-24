import React from "react";

function Reorder({ onReorder }) {
    return (
        <div className = "reorder">
            <h2 className = "reorder__title">The Inventory is out of stock. Please Reorder it. ====></h2>
            <button
            className = "reorder__button"
            onClick={onReorder}
            >Reorder</button>
        </div>
    );
}

export default Reorder;
