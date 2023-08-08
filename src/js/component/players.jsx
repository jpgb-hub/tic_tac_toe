import React, { useState } from 'react';

function PlayerForm() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Player 1: ${player1} (X) \nPlayer 2: ${player2} (O)`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Player 1 (X):
        <input type="text" value={player1} onChange={(e) => setPlayer1(e.target.value)} required />
      </label>
      <br />
      <label>
        Player 2 (O):
        <input type="text" value={player2} onChange={(e) => setPlayer2(e.target.value)} required />
      </label>
      <br />
      <input type="submit" value="Start game" />
    </form>
  );
}

export default PlayerForm;
