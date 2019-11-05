import './Game.css'
import React from 'react'
import ColourCell from './ColourCell'

function UserInput({computerSequence, setUserSequence, userSequence}){
    return(
        <div className="colour-grid">
            <ColourCell
                computerSequence={computerSequence}
                colour={'Red'}
                setUserSequence={setUserSequence}
                userSequence={userSequence}
                />
            <ColourCell
                computerSequence={computerSequence}
                colour={'Green'}
                setUserSequence={setUserSequence}
                userSequence={userSequence}

                />
            <ColourCell
                computerSequence={computerSequence}
                colour={'Yellow'}
                setUserSequence={setUserSequence}
                userSequence={userSequence}

                />
            <ColourCell
                computerSequence={computerSequence}
                colour={'Blue'}
                setUserSequence={setUserSequence}
                userSequence={userSequence}

                />
        </div>
    )
}


export default UserInput