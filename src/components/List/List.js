import React from "react";

function List({ guesses, setGuesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({guess,id})=>(
        <p 
        className="guess"
        key={id}
        >{guess}</p>
     ))}
      
    </div>
  );
}

export default List;
