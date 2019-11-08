import React from 'react'
import './Game.css'
import ColourCell from './ColourCell'


function FlashSequence({computerSequence, setShowComputerSequence}){
    let computerSequenceClone = [...computerSequence]
    // let sequenceCounter = 0
    const [sequenceCounter, setSequenceCounter] = React.useState(0)
    const[colourToFlash, setColourToFlash] = React.useState('')

    //console.log(computerSequenceClone)

    React.useEffect(()=>{

        setTimeout(() => {
            setColourToFlash(computerSequenceClone[sequenceCounter])
                    // console.log(`colour to flash is ${colourToFlash}`)
                    if (sequenceCounter <= computerSequenceClone.length) {
                        setSequenceCounter(prevCount => prevCount + 1)
                    } else setShowComputerSequence(false)
        },1000)


    }, [sequenceCounter])


    return(
        <>
            <h3>Remember the sequence:</h3>
            <div className="colour-grid">
                <ColourCell
                    colourToFlash={colourToFlash}
                    computerSequence={computerSequence}
                    colour={'Red'}
                />
                <ColourCell
                    colourToFlash={colourToFlash}
                    computerSequence={computerSequence}
                    colour={'Green'}
                    />
                <ColourCell
                    colourToFlash={colourToFlash}
                    computerSequence={computerSequence}
                    colour={'Yellow'}
                    />
                <ColourCell
                    colourToFlash={colourToFlash}
                    computerSequence={computerSequence}
                    colour={'Blue'}
                    />
            </div>
        </>
    )
}

export default FlashSequence
