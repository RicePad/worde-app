import React from 'react';

function GuessInput({ handleSubmitGuess, guesses }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>

      {guesses[5] ? (

        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={tentativeGuess}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
          id="guess-input"
          type="text"
          disabled={true} // Disable the input field


        />

      ) :

        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={tentativeGuess}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
          id="guess-input"
          type="text"
        />
      }

    </form>
  );
}

export default GuessInput;