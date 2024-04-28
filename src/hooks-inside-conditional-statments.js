import React, { useState } from "react";

function HookInsideConditionalStatement() {
    const [text, setText] = useState("");

    const handleClick = () => {
      if (text === "") {
        setText("Hello Hooks!");
      } else {
        setText("");
      }
    };

//   const handleClick = () => {
//     const [text, setText] = useState("");
//     if (text === "") {
//       setText("Hello Hooks!");
//     } else {
//       setText("");
//     }
//   };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      {text && <p>{text}</p>}
    </div>
  );
}

export default HookInsideConditionalStatement;
