import React, { useEffect, useState } from "react";

//If a variable from the component scope is used within these hooks’ callbacks,
//it should often be included within the dependency array

function OmittingDependenciesExample(props) {
  const [message, setMessage] = useState("");

  //-----incorrect using-------------//
  // useEffect(() => {
  //   setMessage(`Received prop: ${props.message}`);
  // },[]);

  //-----correct using-------------//
  useEffect(() => {
    setMessage(`Received prop: ${props.message}`);
  }, [props.message]);

  return (
    <div>
      <p>Message: {message}</p>
    </div>
  );
}

export default OmittingDependenciesExample;
