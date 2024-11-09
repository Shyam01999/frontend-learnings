import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseRefHookExample from "./components/UseRefHookExample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UseRefHookExample />
    </>
  );
}

export default App;
