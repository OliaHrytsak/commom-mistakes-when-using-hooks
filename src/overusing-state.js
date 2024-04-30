import React, { useState } from "react";

//Not every variable in a component needs to be part of component state, especially if it doesn’t trigger a re-render.

function OverusingState() {
  const [text, setText] = useState("You shoud not overuse state!!!"); // in this case useState is unnecessary

  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default OverusingState;
