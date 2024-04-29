import React, { useState } from "react";

function UsingStaleStateData() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    //each setCounter call is using the same stale value of counter
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter(prevCounter => prevCounter + 3)
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me +3!</button>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default UsingStaleStateData;
