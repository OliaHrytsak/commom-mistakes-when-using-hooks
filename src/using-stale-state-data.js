import React, { useState } from "react";

//This can occur when we directly reference the state variable in consecutive state updates.
//Because state updates may be asynchronous, the state variable might not reflect
//the latest value when it’s referenced in successive calls

function UsingStaleStateData() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    //-----incorrect using-------------//

    // setCounter(counter + 3);

    //-----correct using-------------//
    setCounter((prevCounter) => prevCounter + 3);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me +3!</button>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default UsingStaleStateData;
