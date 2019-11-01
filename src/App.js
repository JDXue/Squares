import React from 'react';
import logo from './logo.svg';
import './App.css';

import './components/Game.css'
import StartGame from './components/StartGame'
import Game from './components/Game'


function App() {
  const [hasGameStarted,setHasGameStarted] = React.useState(false)
  const [round, setRound] = React.useState(0)

  return (
    <div className="container">
      <h1>Simon Says</h1>
      <br></br>


      {/* <Instructions/> */}
      <StartGame
        hasGameStarted={hasGameStarted}
        setHasGameStarted={setHasGameStarted}
        setRound={setRound}
      />
      <br></br><br></br>
      <Game
        hasGameStarted={hasGameStarted}
        round={round}
        setRound={setRound}

      />
    </div>
  );
}

export default App;
