import React from "react";

function Form({ handleGuess, gameStatus}) {
  const [guess, setGuess] = React.useState('');
  
  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess(guess);
        setGuess('')
      }}
      >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        required
        disabled={gameStatus !== 'playing'}
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        type="text" 
        value={guess}
        onChange={event => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default Form;
