import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'


function StartGame({ hasGameStarted, setHasGameStarted, setRound}){
    return(
        <div className="container">
           <Button
            variant="info"
            onClick={ () => {
                if(hasGameStarted == false){
                    //console.log("This is the start button")
                    setHasGameStarted(true)
                    //this will show up the next time a direct button in Game.js is executed
                    let firstRound = 0
                    setRound(firstRound + 1)
                }

            }}
            >Start Game</Button>
        </div>
    )
}

export default StartGame;

