import Form from '../Form';
import List from '../List';
import React from 'react';
import Banner from '../Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('playing');

  function handleGuess(guess){
    const newGuess = {guess:guess, id:Math.random()};
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (guess.toUpperCase() === answer){
      setGameStatus('won');
    } else if (guesses.length === 5){
      setGameStatus('lost');
    }
  }
  return <>
    {gameStatus}
    <div className="">
      <List 
        guesses={guesses}
        setGuesses={setGuesses}
        answer={answer}
      />
    </div>
    <div>
      <Form
        handleGuess={handleGuess}
        gameStatus={gameStatus}
      />
    </div>
    <div>
      <Banner 
      gameStatus={gameStatus}
      numOfGuesses={guesses.length}
      answer={answer}/>
    </div>
  </>;
}

export default Game;
