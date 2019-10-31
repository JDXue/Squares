import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

function ColourCell({ colour, setUserSequence, userSequence }){
    let buttonColour = ''
    switch (colour) {
        case 'Red': buttonColour = 'danger'
        break

        case 'Yellow': buttonColour = 'warning'
        break

        case 'Green': buttonColour = 'success'
        break

        case 'Blue': buttonColour = 'primary'
        break
    }
    return(
        <Button
            variant = {buttonColour}
            onClick = { () => {
                console.log(colour,userSequence)
                setUserSequence(addToUserSequence(colour))
        }}>
            {colour}
        </Button>
    )
}

export default ColourCell


const addToUserSequence = (colour, userSequence) => {
    let userSequenceClone =  [...]
}

