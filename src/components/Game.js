import React from 'react'
import ColourCell from './ColourCell'


function Game(){
    const[colours , setColours] = React.useState(['Red','Green','Yellow','Blue'])
    const[userSequence, setUserSequence] = React.useState([])

    return(
        <>
            <ColourCell
                colour={'Red'}
                setUserSequence={setUserSequence}
                userSequence={userSequence}
            />
            <ColourCell
                colour={'Green'}
                setUserSequence={setUserSequence}
                userSequence={userSequence}

            />
            <ColourCell
                colour={'Yellow'}
                setUserSequence={setUserSequence}
                userSequence={userSequence}

            />
            <ColourCell
                colour={'Blue'}
                setUserSequence={setUserSequence}
                userSequence={userSequence}

            />
        </>
    )
}

export default Game;