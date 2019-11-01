import './Game.css'

import React from 'react'
import ColourCell from './ColourCell'
import TestSequence from './TestSequence'
import AddToComputerSequence from './AddToComputerSequence'


//values that should not run everytime game function is called



function Game({ hasGameStarted, round, setRound}){
    let strComputerSequence = ''

    const [isCorrectSequence, setIsCorrectSequence] = React.useState(true)
    const[userSequence, setUserSequence] = React.useState([])
    const[computerSequence, setComputerSequence] = React.useState([])

    //boolean allows the computer's sequence to toggle on and off, set by ColourCell and TestSequence
    const[showComputerSequence, setShowComputerSequence] = React.useState(true)

    //console.log(`Has game started? ${hasGameStarted}`)

    //Output 1: when new colour has not been added this should run once
    if ((hasGameStarted) && (showComputerSequence)){
        console.log(`Computer sequence: ${computerSequence}`)
    }


    return(
        <>

            <>
                { //display colours
                    (hasGameStarted)
                    ? <>
                        <h3>Round {round}</h3>
                        <br></br>
                        <br></br>

                            <ColourCell
                                setShowComputerSequence={setShowComputerSequence}
                                colour={'Red'}
                                setUserSequence={setUserSequence}
                                userSequence={userSequence}
                                />
                            <ColourCell
                                setShowComputerSequence={setShowComputerSequence}
                                colour={'Green'}
                                setUserSequence={setUserSequence}
                                userSequence={userSequence}

                                />
                            <ColourCell
                                setShowComputerSequence={setShowComputerSequence}
                                colour={'Yellow'}
                                setUserSequence={setUserSequence}
                                userSequence={userSequence}

                                />
                            <ColourCell
                                setShowComputerSequence={setShowComputerSequence}
                                colour={'Blue'}
                                setUserSequence={setUserSequence}
                                userSequence={userSequence}

                                />
                            <TestSequence
                                round={round}
                                setRound={setRound}
                                isCorrectSequence={isCorrectSequence}
                                setIsCorrectSequence={setIsCorrectSequence}
                                userSequence={userSequence}
                                setUserSequence={setUserSequence}
                                computerSequence={computerSequence}
                                setShowComputerSequence={setShowComputerSequence}
                                />

                        </>
                            : <></>
                    }
            </>

            <>
                { //display end game message
                    ((hasGameStarted) && (!isCorrectSequence))
                    ?<>
                        <br></br>
                        <h1>{`Incorrect! You managed to reach round ${round}`}</h1>
                        <h2>{`Refresh page to try again`}</h2>
                    </>
                    : <></>
                }
            </>



            <>
                { //display colour sequence
                    ((hasGameStarted) && (showComputerSequence))
                    ? <AddToComputerSequence
                    computerSequence={computerSequence}
                    setComputerSequence={setComputerSequence}
                    />
                    : <p></p>
                }
            </>
    </>

)

}

export default Game;







