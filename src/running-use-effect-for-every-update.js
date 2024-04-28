import React, { useEffect, useState } from "react";

function RunningUseEffectForEveryUpdate() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("fetching data");
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => setName(json.name));
  });

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={handleClick}>Click Me +1!</button>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default RunningUseEffectForEveryUpdate;
