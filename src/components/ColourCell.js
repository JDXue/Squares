import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

function ColourCell({ colour, setUserSequence, userSequence }){
    let buttonColour = ''
    switch (colour) {
        case 'Red': buttonColour = 'outline-danger'
        break

        case 'Yellow': buttonColour = 'outline-warning'
        break

        case 'Green': buttonColour = 'outline-success'
        break

        case 'Blue': buttonColour = 'outline-primary'
        break
    }
    return(
        <Button
            variant = {buttonColour}
            onClick = { () => {
                console.log(colour,userSequence)
                setUserSequence(addToUserSequence(colour, userSequence))
                console.log(`After setUserSequence() userSequence is:  ${addToUserSequence(colour, userSequence)}`) //why is userSequence always one behind userSequenceClone?
        }}>
            {colour}
        </Button>
    )
}

export default ColourCell


const addToUserSequence = (colour, userSequence) => {
    let userSequenceClone =  [...userSequence]
    userSequenceClone.push(colour)
    console.log(`The colour ${colour} has been added to this array here: ${userSequenceClone}`)
    console.log(`Here is the original array ${userSequence}`)
    //console.log(typeof userSequence)
    return(
        userSequenceClone
    )
}

