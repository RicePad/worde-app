import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Banner from '../Banner/Banner';

import Guess from '../Guess';

function GuessResults({ guesses, answer }) {
  return (
    <>
    <Banner guesses={guesses} answer={answer}/ >
    <div className="guess-results">
      
      
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses[num]} answer={answer} />
      ))}
    </div>
    </>
  );
}

export default GuessResults;