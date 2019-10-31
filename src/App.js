import React from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './components/Game';
import './components/Game.css'




function App() {
  return (
    <>
      <h1>Simon Says</h1>

      <div>
      <Game/>
      </div>
    </>
  );
}

export default App;
