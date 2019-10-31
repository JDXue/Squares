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
    <>
      <h1>Simon</h1>

      {/* <Instructions/> */}
      <StartGame
        hasGameStarted={hasGameStarted}
        setHasGameStarted={setHasGameStarted}
      />
      <Game
        hasGameStarted={hasGameStarted}
      />
    </>
  );
}

export default App;
