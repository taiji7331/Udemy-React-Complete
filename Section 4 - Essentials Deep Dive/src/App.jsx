import { useState } from 'react';

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

export default function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X' );
    setGameTurns((prevTurns) => {
      let curPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        curPlayer = 'O';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: curPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log />
    </main>
  );
}