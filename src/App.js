import React from 'react';
import './App.css';

import './components/Game.css'
import StartGame from './components/StartGame'
import Game from './components/Game'
import Menu from './components/Menu'
import HighScore from './components/HighScore'

import { Button } from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

function App() {
  const [hasGameStarted,setHasGameStarted] = React.useState(false)
  const [round, setRound] = React.useState(1)

  return (


    <div className="container App">
      <Router>
        <Nav/>
        <Switch>
          <Route path='/game'>
            <br></br><br></br>
            <Game
              hasGameStarted={hasGameStarted} //begin game
              round={round}
              setRound={setRound}
            />
          </Route>

          <Route path='/scoreboard'>
            <HighScore/>
          </Route>

          <Route path='/'>
            <Menu/>
            <StartGame/>
          </Route>

        </Switch>
      </Router>



      {/* { (!hasGameStarted) //display main menu and instructions
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

      /> */}
    </div>
  );
}

export default App;


function Nav() {
  const history = useHistory()

  return(
    <div className="container">
      <div className="nav">
          <div className="nav-link">
            <Link to="/">Main Menu</Link>
          </div>

          <div className="nav-link">
            <Link to="/scoreboard">Highscore Board</Link>
          </div>
      </div>

    </div>

  )

}
