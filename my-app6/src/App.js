import logo from './logo.svg';
import './App.css';
import { useCallback, useMemo, useReducer, useRef, useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import codeInfo from '.';
import SomeChild from './SomeChild';
import useLocalStorage from './useLocalStorage';

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement" :
      return state - 1 ;
    default: return state;  
  }
}

function App() {
// let count = 0;
const [count, setCount] = useState(0)
const shcodeInfo = useContext(codeInfo)
const ref = useRef()
const [state, dispatch] = useReducer(reducer,0);

 const click = () => {
  // count++;
  // console.log(count)
  setCount(count + 1)
 }
useEffect(() => {
   console.log("Hollo")
}, [count])

const handleRef = () => {
  console.log(ref)
}

//useMemo //重い処理
const [count01, setCount01] = useState(0)
const [count02, setCount02] = useState(0)

// const square= () => {
//   let i = 0;
//   while(i < 2) {
//     i++;
//   }
//   return count02 * count02;
// }

const square= useMemo(() => {
  let i = 0;
  while(i < 2000000000) {
    i++;
  }
  return count02 * count02;
}, [count02])

//useCallBack 関数のメモ化
 const [counter, setCounter] = useState(0)

//  const showCount = () => {
//   alert(`これは重い処理です`)
//  }

 const showCount = useCallback(() => {
  alert(`これは重い処理です`)
 }, [counter])

//カスタムフック
const [age,setAge] = useLocalStorage("age", 34)

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={click}>+</button>
      <p>{count}</p>

      <hr />

      <h1>useContext</h1>
      <p>{codeInfo.name}</p>
      <p>{codeInfo.age}</p>
      <hr />

      <h1>useRef</h1>
      <input type='text' ref={ref}/>
      <button onClick={handleRef}>useRef</button>

      <hr />
      <h1>useReducer</h1>
      <p>カウント : {state}</p>
      <button onClick={() => dispatch({ type: "increment"})}>+</button>
      <button onClick={() => dispatch({ type: "decrement"})}>-</button>

      <hr />
      <h1>useMemo</h1>
      <div>カウント１:{count01}</div>
      <div>カウント２:{count02}</div>
      <div>結果: {square}</div>
      <button onClick={() => setCount01(count01 + 1)}>+</button>
      <button onClick={() => setCount02(count02 + 1)}>+</button>

      <hr />
      <h1>useCallBack</h1>
      <SomeChild showCount={showCount}/>

      <hr />
      <h1>カスタムフック</h1>
      <p>{age}</p>
      <button onClick={() => setAge(70)}>年齢をセット</button>
    </div> 
  );
}

export default App;
