import React from "react";
import { useRef } from "react";

function UseRefHookExample() {
  const counter = useRef(0);
  const divElement = useRef();

  const handleClick = () => {
    counter.current++;
    console.log("counter", counter);
    console.log(divElement.current)
  };

  return (
    <>
      <div>Use Ref hook Eample</div>
      <button onClick={handleClick}>Click Me</button>
      <div ref={divElement}>Some random text example</div>
    </>
  );
}

export default UseRefHookExample;
