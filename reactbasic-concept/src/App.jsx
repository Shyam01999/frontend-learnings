import { useState } from "react";
import "./App.css";
import UseRefHookExample from "./components/UseRefHookExample";
import UseMemoHookExample from "./components/UseMemoHookExample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UseRefHookExample /> */}
      <UseMemoHookExample/>
    </>
  );
}

export default App;
