import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useContext } from "react";
import { counterContext } from "./context";

function App() {
  // const [count, setCount] = useState(0);
  const { count, setCount, handleIncrement, handleDecrement } =
    useContext(counterContext);
  console.log("count", count);

  return (
    <>
      <h1>React context example</h1>
      <p>Counter number: {count} </p>
      <button onClick={handleDecrement} disabled={count == 0}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      
    </>
  );
}

export default App;
