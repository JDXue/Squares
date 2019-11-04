import './Game.css'

import React from 'react'
import ColourCell from './ColourCell'
import TestSequence from './TestSequence'
import AddToComputerSequence from './AddToComputerSequence'


//values that should not run everytime game function is called



function Game({ hasGameStarted, round, setRound}){

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
            <div className="game-grid">
                { //display colours
                    //display colour sequence
                    ((hasGameStarted) && (showComputerSequence))
                    ?
                    <>
                        <AddToComputerSequence
                        computerSequence={computerSequence}
                        setComputerSequence={setComputerSequence}
                        />
                    </>


                    :
                        //once colour sequence has shown (showComputerSequence is false)
                        ((hasGameStarted) && (isCorrectSequence) && (!showComputerSequence))
                        ? <>
                            <h3>Round {round}</h3>
                            <br></br>
                            <br></br>
                                <div className="colour-grid">
                                    <ColourCell
                                        setShowComputerSequence={setShowComputerSequence}
                                        computerSequence={computerSequence}
                                        colour={'Red'}
                                        setUserSequence={setUserSequence}
                                        userSequence={userSequence}
                                        />
                                    <ColourCell
                                        setShowComputerSequence={setShowComputerSequence}
                                        computerSequence={computerSequence}
                                        colour={'Green'}
                                        setUserSequence={setUserSequence}
                                        userSequence={userSequence}

                                        />
                                    <ColourCell
                                        setShowComputerSequence={setShowComputerSequence}
                                        computerSequence={computerSequence}
                                        colour={'Yellow'}
                                        setUserSequence={setUserSequence}
                                        userSequence={userSequence}

                                        />
                                    <ColourCell
                                        setShowComputerSequence={setShowComputerSequence}
                                        computerSequence={computerSequence}
                                        colour={'Blue'}
                                        setUserSequence={setUserSequence}
                                        userSequence={userSequence}

                                        />
                                    </div>

                                <br></br>
                                <br></br>

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



            </>






            <br></br>
    </>

)

}

export default Game;







