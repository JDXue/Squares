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
      { (!hasGameStarted)
        ?<>
          <h1>Simon Says</h1>
          <br></br>
          <Instructions/>
          <br></br>

          <>
            {
              (!hasGameStarted)
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
        hasGameStarted={hasGameStarted}
        round={round}
        setRound={setRound}

      />
    </div>
  );
}

export default App;
