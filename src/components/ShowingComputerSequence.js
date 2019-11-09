import React from 'react'
import AddToComputerSequence from './AddToComputerSequence'
import FlashSequence from './FlashSequence'

function ShowingComputerSequence({ computerSequence, setComputerSequence, showComputerSequence, setShowComputerSequence, round }) {
    return (
        <>
            <h3>Round {round}</h3>
            <br></br>
            <br></br>

            <AddToComputerSequence
                computerSequence={computerSequence}
                setComputerSequence={setComputerSequence}
            />

            {computerSequence.length > 0 &&
                <FlashSequence
                    computerSequence={computerSequence}
                    showComputerSequence={showComputerSequence}
                    setShowComputerSequence={setShowComputerSequence}
                />
            }

        </>
    )
}

export default ShowingComputerSequence