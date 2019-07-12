import React, { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0)
  let [isSingle, setIsSingle] = useState(true)

  let increment = () => {
    let inc = isSingle ? 1 : 2
    setCount(count+inc);
  }

  let decrement = () => {
    if (isSingle && count > 0) {
      setCount(count - 1)
    } else if (!isSingle && count > 1) {
      setCount(count - 2)
    }
  }

  let reset = () => {
    setCount(0)
  }

  let toggleSingle = () => {
    setIsSingle(!isSingle)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <h2>{count}</h2>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
          <button onClick={toggleSingle}>{isSingle ? 'Single' : 'Double'}</button>
        </div>
      </header>
    </div>
  );
}

export default App;
