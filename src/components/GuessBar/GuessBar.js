import React from "react";
import GuessList from '../GuessList';
import Grid from '../Grid';
import  { NUM_OF_GUESSES_ALLOWED }  from '../../constants';


function GuessBar() {
   const [guessInput, setGuessInput] = React.useState('');
   const [guessList, setGuessList] =  React.useState([]);
  
  
  return (
    <>
    <GuessList guessList={guessList} setGuessList={setGuessList}/>
    <Grid guessInput={guessInput} numRows={NUM_OF_GUESSES_ALLOWED} numCols={5} />
    <form 
      class="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
       
        const newGuessInput = {
          title: guessInput,
          id: crypto.randomUUID()
        };

        const nextGuess = [...guessList, newGuessInput];
        console.log('nextGuess', nextGuess);
       
        setGuessList(nextGuess);
       
        setGuessInput('');
      }}
      >
      <label for="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        value={guessInput}
        onChange={(event) => {
          setGuessInput(event.target.value.toUpperCase());
        }}
        minLength={5}
        maxLength={5}
        />
    </form>
    </>
  )
}

export default GuessBar;
