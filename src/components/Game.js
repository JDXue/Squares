import React from 'react'
import ColourCell from './ColourCell'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'


function Game({ hasGameStarted, setRound, round}){
    const colours = ['Red','Green','Yellow','Blue']
    const[userSequence, setUserSequence] = React.useState([])
    const[computerSequence, setComputerSequence] = React.useState([])
    console.log(`Has game started? ${hasGameStarted}`)
    if(hasGameStarted){
        addToComputerSequence(colours,setComputerSequence,computerSequence)
        console.log(`My computer's sequence is ${computerSequence.length} long`)
            if (computerSequence.length > 0){
                return(
                    <>
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
                            addToComputerSequence(colours, setComputerSequence, computerSequence)
                        }}
                    >Next Round</Button>
                </>
                )
            }
    }


    return(
        <>
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
        </>
    )
}

export default Game;

const addToComputerSequence = (colours, setComputerSequence, computerSequence) => {
    let computerSequenceClone = [...computerSequence]
    //adds a random colour to sequence from colours array
    computerSequenceClone.push(colours[Math.round(Math.random()*3)])
    console.log(`Here is my computer's random sequence: ${computerSequenceClone}`)
    return computerSequenceClone
}