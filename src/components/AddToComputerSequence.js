import './Game.css'

import React from 'react'

const colours = ['Red','Green','Yellow','Blue']


function AddToComputerSequence({computerSequence, setComputerSequence}){
    let hasAddedToSequence = false

    React.useEffect(() => {
        //console.log('Used useEffect() in AddToComputerSequence')
        console.log(`Computer Sequence is: ${computerSequence}`)
        setComputerSequence(prevSequence => addToComputerSequence(prevSequence))
        hasAddedToSequence = true
    }, [hasAddedToSequence])
    return(
        <>
            {/* <h4>{'Enter the sequence: '}</h4>
            <h4>{computerSequence}</h4> */}
        </>
    )
}

const addToComputerSequence = (computerSequence) => {
    let computerSequenceClone = [...computerSequence]
    //adds a random colour to sequence from colours array
    computerSequenceClone.push(colours[Math.round(Math.random()*3)])
    //console.log(`Here is my computer's random sequence: ${computerSequenceClone}`)
    return computerSequenceClone
}

// const convertToString = (computerSequence) => {
//     let computerSequenceClone = [...computerSequence]
//     //console.log(computerSequenceClone)
//     //console.log(computerSequenceClone)
//     console.log(computerSequenceClone.join(' '))
//     return computerSequenceClone.join(' ')
// }

export default AddToComputerSequence
