
import './App.css';
import { useState } from 'react'

function App() {

  const [showText, setShowText] = useState(true);

  const toggleText = () => {
    setShowText(!showText)
  }

  return (
    <div className="App">
      <button onClick={toggleText}>Show/Hide</button>
      {showText === true && <h1>Hi my name is Nanny</h1>}
    </div>
  );
}

export default App;
