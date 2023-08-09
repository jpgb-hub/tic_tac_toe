import React, { useState } from 'react';
import '../../styles/index.css';


function PlayerForm(props) {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleSubmit = (event) => {
      event.preventDefault();
      props.onStart(player1, player2);
  };

  return (
      <div className="form-container">
          <form className="player-form" onSubmit={handleSubmit}>
              <label className="player-x">
                  Player 1 (X):
                  <input 
                      type="text" 
                      value={player1} 
                      onChange={(e) => setPlayer1(e.target.value)} 
                      required 
                  />
              </label>
              <label className="player-o">
                  Player 2 (O):
                  <input 
                      type="text" 
                      value={player2} 
                      onChange={(e) => setPlayer2(e.target.value)} 
                      required 
                  />
              </label>
              <br />
              <input type="submit" value="Start game" />
          </form>
      </div>
  );
}


export default PlayerForm;

