import { useState } from 'react'
import './App.css';
import './style/style.css';
import Googlemap from './components/Googlemap';
import Calender from './components/Calender';

function App() {
  const [load, setLoad] = useState(false);

  return (
    <>
      <h1 onClick={() => {setLoad(!load)}}>Reload</h1>
      {/* <Googlemap load={load}></Googlemap> */}
      <Calender/>
    </>
  )
}

export default App
