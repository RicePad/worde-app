import React from "react";

function GuessList({ guessList }) {


  const guessArray = function(){
    return(
      guessList.map(function(guess){
        return(
          <p key={guess.id} className="guess">{guess.title}</p>
        )
      })
    )
  }

  return (
    <div class="guess-results">
      {guessArray()}
    </div>    
  );
}

export default GuessList;
