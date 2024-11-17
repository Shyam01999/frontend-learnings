import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const counterContext = createContext(null);

function GlobalContext({ children }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  
  return (
    <counterContext.Provider
      value={{ count, setCount, handleIncrement, handleDecrement }}
    >
      {children}
    </counterContext.Provider>
  );
}

export default GlobalContext;
