import { useState } from "react";
import "./App.css";
import UseRefHookExample from "./components/UseRefHookExample";
import UseMemoHookExample from "./components/UseMemoHookExample";
import UseCallbackHookExample from "./components/UseCallbackHookExample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UseRefHookExample /> */}
      {/* <UseMemoHookExample/> */}
      <UseCallbackHookExample />
    </>
  );
}

export default App;
