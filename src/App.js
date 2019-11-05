import React from 'react';
import './App.css';

import './components/Game.css'
import StartGame from './components/StartGame'
import Game from './components/Game'
import Instructions from './components/Instructions'

function App() {
  const [hasGameStarted,setHasGameStarted] = React.useState(false)
  const [round, setRound] = React.useState(0)

  return (
    <div className="container App">
      { (!hasGameStarted) //display main menu and instructions
        ?<>
          <h1>Simon Says</h1>
          <br></br>
          <Instructions/>
          <br></br>

          <>
            {
              (!hasGameStarted) //display the start button if game not started
                ? <StartGame
                  hasGameStarted={hasGameStarted}
                  setHasGameStarted={setHasGameStarted}
                  setRound={setRound}
                  />
                : <p></p>
            }
          </>
          </>
          : <></>

      }
      <br></br><br></br>
      <Game
        hasGameStarted={hasGameStarted} //begin game
        round={round}
        setRound={setRound}

      />
    </div>
  );
}

export default App;
