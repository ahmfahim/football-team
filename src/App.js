import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './data/data.json';
import Players from './components/Players/Players';
import Header from './components/Header/Header';

function App() {
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState([]); 
  
  useEffect(() => {
    setPlayers(data);
  },[]);

  // event handler for team selection 

  const handleAddToTeam =(player)=>{
    const newTeam = [...team, player];
    setTeam(newTeam);
  }

  return (
    <div className="App">
      <Header count = {team}></Header>
      
      {
        players.map(player => <Players playerInfo={player} addToTeam={handleAddToTeam}></Players>)
      }
    </div>
  );
}

export default App;
