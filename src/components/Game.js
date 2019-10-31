import React from 'react'
import ColourCell from './ColourCell'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

const colours = ['Red','Green','Yellow','Blue']

//computerSequence needs to remain outside the Game component in order to prevent the computerSequence
function Game({ hasGameStarted, round, computerSequence, setComputerSequence}){
    let newComputerSequence = []
    const[userSequence, setUserSequence] = React.useState([])


    console.log(`Has game started? ${hasGameStarted}`)

    if(hasGameStarted){
        newComputerSequence = addToComputerSequence(computerSequence)
        //setComputerSequence(newComputerSequence)
        console.log()
        console.log(`My computer's sequence is ${newComputerSequence.length} long`)
    }

    if (newComputerSequence.length > 0){
            return(
                <>
                <h3>Round {round}</h3>
                <br></br>
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
                    onClick={() => {
                        //testUserSequence()
                        //addToComputerSequence(colours, setComputerSequence, computerSequence)
                    }}
                >Test Sequence</Button>
            </>
            )
        }

    //default return for game
    return(
        <>
            {/* <ColourCell
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

            /> */}
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