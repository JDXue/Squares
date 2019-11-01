import React from 'react'

function Instructions(){
    return(
        <>
            <div className="container">
                <p>Simon is a memory game, where a colour will show and then disappear, and the user has to try and remember what the colour was.
                As the game progressed, the number of colours to rememeber in the sequence increases, and the game becomes harder!</p>
                <br></br>
                <p>The user must replicate the colour sequence correctly each time by pressing the appropriate colour button in the right order,
                and then pressing 'Test Sequence' to see if they got it right.</p>

            </div>

        </>
    )

}

export default Instructions