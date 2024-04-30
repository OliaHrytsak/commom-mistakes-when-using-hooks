import React, { useState } from "react";

function HookInsideConditionalStatement() {
  //It’s a common error to use hooks inside loops, conditional statements or nested functions. 
  //This can lead to inconsistent hook calls between renders, resulting in erratic behaviors and hard-to-find bugs

  //-----correct using-------------//
    const [text, setText] = useState("");

    const handleClick = () => {
      if (text === "") {
        setText("Hello Hooks!");
      } else {
        setText("");
      }
    };

     //-----incorrect using-------------//

  // const handleClick = () => {
  //   const [text, setText] = useState("");
  //   if (text === "") {
  //     setText("Hello Hooks!");
  //   } else {
  //     setText("");
  //   }
  // };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      {text && <p>{text}</p>}
    </div>
  );
}

export default HookInsideConditionalStatement;
