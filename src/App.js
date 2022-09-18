
import './App.css';
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  const increate = () => {
    setCount(count + 1);
  }

  const decreate = () => {
    setCount(count - 1);
  }

  const setZero = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <button onClick={increate}>Increase</button>
      <button onClick={decreate}>Decrease</button>
      <button onClick={setZero}>Set to Zero</button>

      <h1>{count}</h1>
    </div>
  );
}

export default App;
