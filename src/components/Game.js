import './Game.css'

import React from 'react'
import TestSequence from './TestSequence'
import AddToComputerSequence from './AddToComputerSequence'
import UserInput from './UserInput'
import FlashSequence from './FlashSequence'


//values that should not run everytime game function is called



function Game({ hasGameStarted, round, setRound}){

    const [isCorrectSequence, setIsCorrectSequence] = React.useState(true)
    const[userSequence, setUserSequence] = React.useState([])
    const[computerSequence, setComputerSequence] = React.useState([])

    //boolean allows the computer's sequence to toggle on and off, set by ColourCell and TestSequence
    const[showComputerSequence, setShowComputerSequence] = React.useState(true)
    //indicates when flashing colours have finished
    const[isSequenceFinished, setIsSequenceFinished] = React.useState(false)

    //console.log(`Has game started? ${hasGameStarted}`)

    //Output 1: when new colour has not been added this should run once
    if ((hasGameStarted) && (showComputerSequence)){
        console.log(`Computer sequence: ${computerSequence}`)
    }


    return(
        <>


            <div className="game-grid">
                { //display colours
                    //display colour sequence
                    ((hasGameStarted) && (showComputerSequence)) //this section shows the colour sequence
                    ?
                        <>
                            <h3>Round {round}</h3>
                            <br></br>
                            <br></br>

                            <AddToComputerSequence
                                computerSequence={computerSequence}
                                setComputerSequence={setComputerSequence}
                            />

                            {((computerSequence.length > 0))?
                                <FlashSequence
                                    computerSequence={computerSequence}
                                    showComputerSequence={showComputerSequence}
                                    setShowComputerSequence={setShowComputerSequence}
                                />
                            : <></>
                            }

                        </>


                    :
                        //once colour sequence has shown (showComputerSequence is false)
                        ((hasGameStarted) && (isCorrectSequence)) //allows user to enter their guess after sequence has finished
                        ?   <>
                                <h3>Round {round}</h3>
                                <br></br>
                                <br></br>

                                <UserInput/>
                                <br></br>
                                <br></br>

                                <TestSequence //button to test sequence and add to sequence, sets showComputerSequence to true if correct sequence
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

                        : (!isCorrectSequence) ?//display end game message
                        <>
                            <h1>{`Incorrect! You managed to reach round ${round}`}</h1>
                            <br></br>
                            <h2>{`Refresh page to try again`}</h2>
                        </>
                        : <></>
                }

                <br></br>

            </div>

            <br></br>
    </>

)

}

export default Game;







