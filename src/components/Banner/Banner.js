import React from "react";

function Banner({gameStatus,numOfGuesses,answer}){
  console.log({gameStatus})
  return (
    <div>
        {gameStatus && gameStatus === 'won' &&
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong>
                {' '}
                {numOfGuesses > 1 ? `${numOfGuesses} guesses` : `1 guess`}</strong>.
            </p>
          </div> 
        }
        {gameStatus && gameStatus === 'lost' && 
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>.</p>
        </div>
}   
    </div>
    
  )
}
export default Banner;
