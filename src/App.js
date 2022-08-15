import React, { useState } from 'react';
import GuessingGame from './GuessingGame';

function App() {
  const [guess, setGuess] = useState([])


  const handleGuess = (number) => {

    setGuess(guess.concat(number))

  }

  function log(){
    return(
      <>
      </>
    )
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <GuessingGame onGuess={handleGuess} onReset={log}/>
    </div>
  );
}

export default App;
