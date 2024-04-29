import React, { useEffect, useState } from "react";

function OmittingDependenciesExample(props) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    
    setMessage(`Received prop: ${props.message}`);
  }, [props]); 

  return (
    <div>
      <p>Message: {message}</p>
    </div>
  );
}

export default OmittingDependenciesExample;