import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

let theNumber = Math.floor((Math.random() * 100) + 1);

function GuessingGame(props) {

    const [number, setNumber] = useState('')
    const [count, setCount] = useState(0)
    const [ranNum, setRanNum] = useState(theNumber)
    const [msg, setMsg] = useState('')
    let [hlb, setHlb] = useState('')
    const [disabled, setDisabled] = useState(false)

    
    // const submitHandle = () => {
    //     console.log(number.guess)
    // }        // this ^^ is the input referenced for the If/Else statement to function //

    function handleInput(event) {
        setNumber({ ...number, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault()
        setCount(count + 1)

        if (Number(+ranNum) === Number(+number.guess)) {
            setMsg("You Dun Got It!!!")
            setDisabled(true)
            setHlb("BINGO!!!")
             
        } else if (count === 6) {
            setMsg("You Dun Goofed")
            setDisabled(true)
            setHlb("Dun Goofed *Click to Reset*")
        }else if (count === 5) {
            setMsg("Dun Guessed Wrong *Take A Peek at The Console*")
            
            setHlb("One More Dun-Diddum Guess")
        }
        else {
            setMsg("Dun Guessed Wrong")

            if (Number(+ranNum) > Number(+number.guess)) {
                setHlb("Too Low")
            }
            if (Number(+ranNum) < Number(+number.guess)) {
                setHlb("Too High")
            }
            
        }
        
        console.log(`You Dun Guessed`, count + 1, `Times.`)
        console.log(`Input: `, number.guess)
        console.log(`Random Number: `, theNumber)
        
    }



    function handleReset() {
        setDisabled(false)
        setRanNum(theNumber = Math.floor((Math.random() * 100) + 1))
        props.onGuess(count + theNumber)
        setCount(0)
        setNumber('')
        setHlb('')
        setMsg("")
        console.log(`You Dun Reset Count To`, 0)
    }

    return (
        <div>
            <div>
                <p>I am thinking of a number between 1 and 100. Only 7 Guesses at the Lucky Number!</p>
                <p>You have made {count} guesses</p>
                {/*V for testing the button/function V */}
                <p>'placeholder-TheNumber' {theNumber}</p>
            </div>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Control type="text" name="guess" disabled={disabled} onChange={handleInput} />
                    </Form.Group>
                </Form>
                <Button type='GuessSend' disabled={disabled} onClick={handleSubmit}>Guess</Button>
                <br />
                <Button type='Reset' onClick={handleReset}>Reset</Button>
                <p className='Bingo'>{hlb}</p>
            </div>
            <div className='userCount'>
                <p className='Msg'>{msg} </p>
                <p>Guess {number.guess}</p>
            </div>
        </div>



    )

}

export default GuessingGame