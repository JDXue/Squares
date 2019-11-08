import './Game.css'

import React from 'react'
import TestSequence from './TestSequence'
import UserInput from './UserInput'
import ShowingComputerSequence from './ShowingComputerSequence'




//values that should not run everytime game function is called



function Game({ round, setRound}){

    const [isCorrectSequence, setIsCorrectSequence] = React.useState(true)
    const[userSequence, setUserSequence] = React.useState([])
    const[computerSequence, setComputerSequence] = React.useState([])

    //boolean allows the computer's sequence to toggle on and off, set by ColourCell and TestSequence
    const[showComputerSequence, setShowComputerSequence] = React.useState(true)
    //indicates when flashing colours have finished


    //Output 1: when new colour has not been added this should run once
    if (showComputerSequence){
        console.log(`Computer sequence: ${computerSequence}`)
        console.log(userSequence)

    }

    const showingSequenceProps = {
        setComputerSequence,
        setShowComputerSequence,
        computerSequence,
        round,
        showComputerSequence
    }

    const testSequenceProps = {}

    return(
        <>


            <div className="game-grid">
                { //display colours
                    //display colour sequence
                    (showComputerSequence) //this section shows the colour sequence
                    ? <ShowingComputerSequence {...showingSequenceProps} />

                    :
                        //once colour sequence has shown (showComputerSequence is false)
                        (isCorrectSequence) //allows user to enter their guess after sequence has finished
                        ?   <>
                                <h3>Round {round}</h3>
                                <br></br>
                                <br></br>

                                <UserInput
                                    computerSequence={computerSequence}
                                    userSequence={userSequence}
                                    setUserSequence={setUserSequence}
                                />
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







