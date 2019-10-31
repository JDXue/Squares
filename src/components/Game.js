import React from 'react'
import ColourCell from './ColourCell'


function Game(){
    const[colours , setColours] = React.useState(['Red','Green','Yellow','Blue'])
    const[isButtonPressed, setIsButtonPressed] = React.useState(false)
    const[userSequence, setUserSequence] = React.useState([])

    return(
        <>
            <ColourCell
                colour={'Red'}
                setIsButtonPressed={setIsButtonPressed}
                isbuttonPressed={isButtonPressed}
                setUserSequence={setUserSequence}
                userSequence={userSequence}
            />
            <ColourCell
                colour={'Green'}
                setIsButtonPressed={setIsButtonPressed}
                isbuttonPressed={isButtonPressed}
                setUserSequence={setUserSequence}
                userSequence={userSequence}

            />
            <ColourCell
                colour={'Yellow'}
                setIsButtonPressed={setIsButtonPressed}
                isbuttonPressed={isButtonPressed}
                setUserSequence={setUserSequence}
                userSequence={userSequence}

            />
            <ColourCell
                colour={'Blue'}
                setIsButtonPressed={setIsButtonPressed}
                isbuttonPressed={isButtonPressed}
                setUserSequence={setUserSequence}
                userSequence={userSequence}

            />
        </>
    )
}

export default Game;