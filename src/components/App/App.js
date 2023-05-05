import Game from '../Game';
import JohshGame from '../JoshGame';

import Header from '../Header';
import GuessBar from '../GuessBar';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
         <JohshGame />
      </div>
    </div>
  );
}

export default App;
