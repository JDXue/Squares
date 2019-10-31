import React from 'react'
import ColourCell from './ColourCell'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

//values that should not run everytime game function is called
const colours = ['Red','Green','Yellow','Blue']
let newComputerSequence = []
let hasExampleRun = false

//computerSequence needs to remain outside the Game component in order to prevent the computerSequence
function Game({ hasGameStarted, round, computerSequence, setComputerSequence}){
    let strComputerSequence
    const[userSequence, setUserSequence] = React.useState([])
    console.log(`Has game started? ${hasGameStarted}`)


    if((hasGameStarted)&&(!hasExampleRun)){
        newComputerSequence = addToComputerSequence(computerSequence)
        strComputerSequence = newComputerSequence.join(', ')

        //setComputerSequence(newComputerSequence)
        console.log(`My computer's sequence is ${newComputerSequence.length} long`)
        hasExampleRun = true
    }

    if (newComputerSequence.length > 0){
            return(
                <>
                <h3>Round {round}</h3>
                <br></br>
                <h4>{strComputerSequence}</h4>
                {/* <h4>{newComputerSequence}</h4> */}
                <ColourCell
                    colour={'Red'}
                    setUserSequence={setUserSequence}
                    userSequence={userSequence}
                />
                <ColourCell
                    colour={'Green'}
                    setUserSequence={setUserSequence}
                    userSequence={userSequence}

                />
                <ColourCell
                    colour={'Yellow'}
                    setUserSequence={setUserSequence}
                    userSequence={userSequence}

                />
                <ColourCell
                    colour={'Blue'}
                    setUserSequence={setUserSequence}
                    userSequence={userSequence}

                />
                <Button
                    variant="info"
                    onClick={() => {
                        testUserSequence(userSequence, newComputerSequence)
                        //addToComputerSequence(colours, setComputerSequence, computerSequence)
                    }}
                >Test Sequence</Button>
            </>
            )
        }

    //default return for game
    return(
        <>
            {/* empty fragment */}
        </>
    )
}

export default Game;

const addToComputerSequence = (computerSequence) => {
    let computerSequenceClone = [...computerSequence]
    //adds a random colour to sequence from colours array
    computerSequenceClone.push(colours[Math.round(Math.random()*3)])
    console.log(`Here is my computer's random sequence: ${computerSequenceClone}`)
    return computerSequenceClone
}

const testUserSequence = (userSequence, newComputerSequence) => {
    console.log(`computer's: ${newComputerSequence}`)
    console.log(`user's: ${userSequence}`)
}



