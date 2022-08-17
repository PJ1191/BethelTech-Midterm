import React, { useState } from 'react';
import GuessingGame from './GuessingGame';
// import usePersistence from './usePersistence';

function App() {
  // const [per, setPer] = usePersistence([])
  // const [selectedContact, setSelectedContact] = usePersistence('selectedContact', null)

  //  function handleNewNum(number){
  //   setPer(number.concat(number))
  //  }
  
  //  function handleGuess(theNumber) {
  //   setSelectedContact(theNumber)
  //   setPer(count)
  // }

  return (
    <div style={{ textAlign: 'center' }}>
      <GuessingGame  />
    </div>
  );
}

export default App;
