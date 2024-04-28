import React, { useState } from "react";

function OverusingState() {
  const [text, setText] = useState("You shoud not overuse state!!!");

  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default OverusingState;
