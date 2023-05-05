import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function HappyBanner({ guesses, answer }) {
  const bannerMessage = range(NUM_OF_GUESSES_ALLOWED).map((num) => {
    if(guesses[num] === answer ){
      return (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            {' '}
            <strong>{guesses.length - 1} guesses</strong>.
          </p>
        </div>
      );
    }
  
  })

  return bannerMessage;
  
}

function SadBanner({ guesses, answer }) {
  if(guesses[5] && guesses[5] !== answer[5]){
  return (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
  }
}


function Banner({ guesses, answer }) {
  return (
    <>
      <HappyBanner guesses={guesses} answer={answer} />
      <SadBanner guesses={guesses} answer={answer} />
    </>
  );
}

export default Banner;
