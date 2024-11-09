import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import Counter from "./Counter";

function UseCallbackHookExample() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const memoriseSetCountOneFunc = useCallback(
    () => setCounterOne(counterOne + 1),
    [counterOne]
  );
  const memoriseSetCountTwoFunc = useCallback(
    () => setCounterTwo(counterTwo + 1),
    [counterTwo]
  );
  return (
    <>
      <h1>Use Callback Hook Example</h1>
      <Counter counter={counterOne} onClick={memoriseSetCountOneFunc} />
      <Counter counter={counterTwo} onClick={memoriseSetCountTwoFunc} />
    </>
  );
}

export default UseCallbackHookExample;
