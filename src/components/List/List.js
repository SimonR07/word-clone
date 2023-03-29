import React from "react";
import Guess from '../Guess';


import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";



function List({ guesses,answer  }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num)=>(
        
        <Guess 
          className="guess"
          key={num}
          value={guesses[num]}
          answer={answer}
          >
        </Guess>
     ))}
      
    </div>
  );
}

export default List;
