import React from "react";
import { range } from '../../utils';


function Grid({ numRows, numCols, guessInput}) {

 let guessLetter = guessInput.split('');
 console.log(guessLetter);

  return (
    <div class="guess-results">

     {range(numRows).map(function(rowIndex) {

        return (
          <p className="guess">
            {range(numCols).map(function() {
              return(
                <span class="cell">
                  
                </span>
                
              )
            })}
          </p>
        )
      })}
    </div>

  );
}

export default Grid;
