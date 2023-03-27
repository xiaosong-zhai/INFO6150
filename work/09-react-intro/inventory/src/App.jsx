import React, { useState } from "react";
import Reorder from "./Reorder";
import "./App.css";

function App() {
  const [count, setCount] = useState(5);
  return (
      <div className="app">
        <h1>The Inventory Count is : {count} </h1>
        <button
        className="app__addbutton"
        type="button"
        onClick={ () => setCount( count + 1)}
        > + </button>
        <button
        className="app__minbutton"
        type="button"
        onClick={ () => setCount(count - 1)}
        disabled={!count}
        > - </button>
        {count === 0 && <Reorder onReorder={ () => setCount(5)} />}
      </div>
  );
}

export default App;

