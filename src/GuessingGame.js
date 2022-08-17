import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



function GuessingGame() {

    const [number, setNumber] = useState('')
    const [count, setCount] = useState(null)
    const [ranNum, setRanNum] = useState(null)
    const [msg, setMsg] = useState('')
    let [hlb, setHlb] = useState('')
    const [disabled, setDisabled] = useState(false)


    // const submitHandle = () => {
    //     console.log(number.guess)
    // }        // this ^^ is the input referenced for the If/Else statement to function //


    useEffect(() => {

        if (ranNum === null) {
            setRanNum(
                JSON.parse(localStorage.getItem("randomNumber") || getRandomNumber())
            )

        }

        if (count === null) {
            setCount(
                JSON.parse(localStorage.getItem("count") || 0)
            )

        }

    }, [])


    const getRandomNumber = () => {

        let theNumber = Math.floor((Math.random() * 100) + 1);

        localStorage.setItem("randomNumber", JSON.stringify(theNumber));


        return theNumber;

    }

    function handleInput(event) {
        setNumber({ ...number, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault()
        setCount(count + 1)
        localStorage.setItem("count", count + 1)
        if (Number(+ranNum) === Number(+number.guess)) {
            setMsg("You Dun Got It!!!")
            setDisabled(true)
            setHlb("BINGO!!!")

        } else if (count === 6) {
            setMsg("You Dun Goofed")
            setDisabled(true)
            setHlb("Dun Goofed *Click to Reset*")
        } else if (count === 5) {
            setMsg("Dun Guessed Wrong *Take A Peek at The Console*")
            setHlb("One More Dun-Diddum Guess")
            console.log(ranNum)
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

    }

    function handleReset() {
        setDisabled(false)
        setRanNum(null)
        setCount(null)
        setNumber('')
        setHlb('')
        setMsg("")
        
        console.log(`You Dun Reset Count To`, 0)
        window.location.reload();
        localStorage.removeItem("count");
        localStorage.removeItem("randomNumber");
        
    }

    return (
        <div>
            <div>
                <p>I am thinking of a number between 1 and 100. Only 7 Guesses at the Lucky Number!</p>
                <p>You have made {count} guesses</p>
                {/*V for testing the button/function V */}
                {/* <p>'placeholder-TheNumber' {ranNum}</p> */}
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