import React, { useEffect, useState } from "react";

function NotClearingSideEffects() {
  //   const [timer, setTimer] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log("timer works");
    }, 1000);
    // return () => clearTimeout(timerId);
  });

  return (
    <div>
      <p></p>
    </div>
  );
}

export default NotClearingSideEffects;
