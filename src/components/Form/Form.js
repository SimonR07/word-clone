import React from "react";

function Form({ handleGuess }) {
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
        pattern="[A-Za-z]{5}"
        type="text" 
        value={guess}
        onChange={event => setGuess(event.target.value)}
      />
    </form>
  );
}

export default Form;
