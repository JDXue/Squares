import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


import { Button } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";


function StartGame(){
    const history = useHistory()
    return(
        <div className="container start-button">
            <Button
            variant="info"
            onClick={() => {
                history.push('/game')
            }}>
                Start Game

            </Button>

        </div>
    )
}

export default StartGame;

