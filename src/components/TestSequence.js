import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

function TestSequence({
    round, setRound, isCorrectSequence, setIsCorrectSequence, userSequence, setUserSequence, computerSequence, setShowComputerSequence}){
        let testSequenceName = 'Test Sequence'
        let testMessage = ''
    return(
        <>
            <Button
                variant="info"
                onClick={() => {
                    console.log(`This is the user sequence: ${userSequence}, and this is the computer sequence: ${computerSequence} `)
                    isCorrectSequence = testUserSequence(userSequence, computerSequence)
                    console.log(isCorrectSequence)
                    if(isCorrectSequence){
                        testMessage = 'Correct!'
                        //reset user
                        setUserSequence([])
                        setShowComputerSequence(true)
                        setRound((round) + 1)
                    }
                    else{
                        setIsCorrectSequence(false)
                        testMessage = "Incorrect!"

                    }
                }}
            >{testSequenceName}</Button>
            {/* This is not showing up at the moment */}
            <h3>{testMessage}</h3>
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
