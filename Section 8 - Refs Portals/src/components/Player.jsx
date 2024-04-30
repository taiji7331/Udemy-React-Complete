import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);

  const inputName = useRef();

  function handleClick() {
    setPlayerName(inputName.current.value);
    inputName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={inputName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
