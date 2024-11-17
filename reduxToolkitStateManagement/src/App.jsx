import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slice/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());

  const handleDecrement = () => dispatch(decrement());

  return (
    <>
      <h1>React Redux Toolkit Example</h1>
      <p>Counter number : {count}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

export default App;
