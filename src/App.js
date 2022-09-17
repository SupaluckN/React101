
import './App.css';
import {User} from './User.js'
import "./planets.js"
import {Planet} from './Planet.js'

function App() {

  const users = [
    {name:"Nanny",position:"Web developer"},
    {name:"Mike",position:"Mike"},
  ];

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptuen", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div className="App">
      <h1>The list of planets is Gas planet.</h1>
      {planets.map(
        (planet, key) => planet.isGasPlanet && <p>{planet.name}</p>
      )}
    </div>
  );
}

export default App;
