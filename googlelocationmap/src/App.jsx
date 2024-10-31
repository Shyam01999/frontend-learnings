import { useState } from 'react'
import './App.css';
import './style/style.css';
import Googlemap from './components/Googlemap';

function App() {
  const [load, setLoad] = useState(false);

  return (
    <>
      <h1 onClick={() => {
        console.log("hi")
        setLoad(!load)
        }}>Reload</h1>
      <Googlemap load={load}></Googlemap>
    </>
  )
}

export default App
