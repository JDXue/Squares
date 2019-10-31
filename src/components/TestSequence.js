import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

function TestSequence({
    isCorrectSequence, userSequence, setUserSequence, computerSequence, setComputerSequence, addToComputerSequence, colours}){
        let testSequenceName = 'Test Sequence'
    return(

        <Button
            variant="info"
            onClick={() => {
                console.log(`This is the user sequence: ${userSequence}, and this is the computer sequence: ${computerSequence} `)
                isCorrectSequence = testUserSequence(userSequence, computerSequence)
                console.log(isCorrectSequence)
                if(isCorrectSequence){
                    testSequenceName = 'Correct!'
                    //reset user
                    setUserSequence([])
                    setComputerSequence(addToComputerSequence(colours, setComputerSequence, computerSequence))
                }
            }}
        >{testSequenceName}</Button>
    )
}

export default TestSequence

const testUserSequence = (userSequence, newComputerSequence) => {
    console.log(`computer's: ${newComputerSequence}`)
    console.log(`user's: ${userSequence}`)
    if(userSequence.join('') == newComputerSequence.join('')){
        console.log('Correct sequence!')
        return true
    }
    else{
        console.log('Not correct!')
        return false
    }
}
