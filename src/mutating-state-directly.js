import React, { useState } from "react";

function MutatingStateDirectly() {
  const [text, setText] = useState([]);

  //Direct state mutation doesn’t immediately trigger a re-render, 
  //causing a discrepancy between the displayed state and the actual state of the component

  const handleClick = () => {

  //--------incorrect using------------//
    // text.push("Do not mutate state directly!"); 
    
  //--------correct using------------//  
    setText((prevState) => [...prevState, "Do not mutate state directly!"]);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      {text && <p>{text}</p>}
    </div>
  );
}

export default MutatingStateDirectly;
