import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function GuessingGame(props) {
    const [number, setNumber] = useState([])
    const [count, setCount] = useState(0)

    const handlerValue = (e) => {
        setCount(e.target.value);
    };

    function handleGuess(event) {
        setNumber({ ...number, [event.target.name]: event.target.value });
    }

    function handleSubmit() {
        setCount(count+1)
        console.log(`You Dun Guessed`, count+1, `Times.`)
       
    }

    function handleReset() {
        props.onReset(count)
        setCount(null)
        console.log(`You Dun Reset `, count)

    }

    var theNumber = Math.floor((Math.random() * 100) + 1);
    var userSelect = 0;


    return (
        <div>
            <div>
                <p>I am thinking of a number between 1 and 100. Guess the Lucky Number!</p>
                <p>You have made {count} guesses</p>
            </div>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Control type="text" name="name" onChange={handleGuess} />
                    </Form.Group>
                </Form>
                <Button type='GuessSend' onClick={handleSubmit}>Guess</Button>
                <br />
                <Button type='Reset' onClick={handleReset}>Reset</Button>
            </div>

        </div>



    )
}

export default GuessingGame