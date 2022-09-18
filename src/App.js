
import './App.css';
import { useState } from 'react'

function App() {

 const [age, setAge] = useState(0);

 const increaseAge = () => {
  setAge(age + 1);
  console.log(age)
 };

  return (
    <div className="App">
      <h1>{age}</h1>
      <button onClick={increaseAge}>Increase age</button>
    </div>
  );
}

export default App;
