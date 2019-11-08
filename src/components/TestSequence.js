import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

function TestSequence({
    round, setRound, isCorrectSequence, setIsCorrectSequence, userSequence, setUserSequence, computerSequence, setShowComputerSequence}){
    const [victoryMessage, setVictoryMessage] = React.useState('')

    return(
        <>
            <Button
                variant="info"
                onClick={() => {
                    console.log(`This is the user sequence: ${userSequence}, and this is the computer sequence: ${computerSequence} `)
                    isCorrectSequence = testUserSequence(userSequence, computerSequence)
                    // console.log(isCorrectSequence)
                    if(isCorrectSequence){
                        console.log('Correct!')
                        //reset user
                        setUserSequence([])
                        setShowComputerSequence(true)
                        setVictoryMessage('Correct!')
                        setRound((round) + 1)

                    }
                    else{
                        setIsCorrectSequence(false)
                        console.log('Incorrect!')

                    }
                }}
            >Test Sequence</Button>

            <h3>{victoryMessage}</h3>

        </>
    )
}

export default TestSequence

const testUserSequence = (userSequence, computerSequence) => {
    console.log(`computer's: ${computerSequence}`)
    console.log(`user's: ${userSequence}`)
    let userSequenceClone = [...userSequence]
    let computerSequenceClone = [...computerSequence]

    if(userSequenceClone.join('') == computerSequenceClone.join('')){
        console.log('Correct sequence!')
        return true
    }
    else{
        console.log('Not correct!')
        return false
    }
}
