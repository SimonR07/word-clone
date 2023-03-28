import Game from '../Game';
import Header from '../Header';
import Form from '../Form';
import List from '../List';
import React from 'react';

function App() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(guess){
    const newGuess = {guess:guess.toUpperCase(), id:Math.random()};
    setGuesses([...guesses, newGuess]);
  }
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
      </div>
      <div className="">
       <List 
        guesses={guesses}
        setGuesses={setGuesses}
       />
      </div>
      <div>
        <Form
          handleGuess={handleGuess}
        />
      </div>
    </div>
  );
}

export default App;
