import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

function StartGame(hasGameStarted, setHasGameStarted){
    return(
        <Button
           variant="info"
           onClick={ () => {
               console.log("This is the start button")
           }}
        >Start Game</Button>
    )
}

export default StartGame;