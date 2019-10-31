import React from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './components/Game';
import './components/Game.css'
import StartGame from './components/StartGame';




function App() {
  const[hasGameStarted, setHasGameStarted] = React.setState(false)
  return (
    <>
      <h1>Simon</h1>

      <Game/>
      {/* <Instructions/> */}
      <StartGame
        hasGameStarted={hasGameStarted}
        setHasGameStarted={setHasGameStarted}
      />
    </>
  );
}

export default App;
