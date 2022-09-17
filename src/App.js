
import './App.css';
import {User} from './User.js'

function App() {

  const users = [
    {name:"Nanny",position:"Web developer"},
    {name:"Mike",position:"Mike"},
  ];
  
  return (
    <div className="App">
      {users.map((user,key) => {
        return <User name={user.name} position={user.position} key={key} />
      })}
    </div>
  );
}

export default App;
