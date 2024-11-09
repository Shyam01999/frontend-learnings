import React from "react";
import { memo } from "react";

function Counter({ counter, onClick }) {
    console.log("hello")
  return (
    <>
      <h2>{counter}</h2>
      <button onClick={onClick}>Counter One</button>
    </>
  );
}

export default memo(Counter);
