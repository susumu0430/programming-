import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import codeInfo from '.';

function App() {
const [count, setCount] = useState(0)
const shcodeInfo = useContext(codeInfo)

 const click = () => {
  setCount(count + 1)
 }
useEffect(() => {
   console.log("Hollo")
}, [count])
  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={click}>+</button>
      <p>{count}</p>

      <hr />

      <h1>useContext</h1>
      <p>{codeInfo.name}</p>
      <p>{codeInfo.age}</p>
    </div>
  );
}

export default App;
