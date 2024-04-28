import React, { useState } from "react";

function MutatingStateDirectly() {
  const [text, setText] = useState([]);

  const handleClick = () => {
    // text.push("Do not mutate state directly!");
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
