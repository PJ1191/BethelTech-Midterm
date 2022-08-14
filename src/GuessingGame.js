import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function GuessingGame() {
    return (
        <div>
            <div>
                <p>I am thinking of a number between 1 and 100. Guess the Lucky Number!</p>
                <p>You have made {'{blank}'} guesses</p>
            </div>
            <div>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" />
                    </Form.Group>
                </Form>
                <Button type='GuessSend'>Guess</Button>
                <br/>
                <Button type='Reset'>Reset</Button>

            </div>
        </div>


    )
}

export default GuessingGame