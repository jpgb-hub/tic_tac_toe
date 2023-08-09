import React, { useState } from "react";
import TicTacToe from "./TicTacToe.jsx";
import PlayerForm from "./players.jsx"; // Parece que hay un error tipográfico aquí. Debería ser PlayerForm

//create your first component
const Home = () => {
    const [hasGameStarted, setHasGameStarted] = useState(false);
    const [players, setPlayers] = useState({ player1: '', player2: '' });

    const startGame = (player1, player2) => {
        setPlayers({ player1, player2 });
        setHasGameStarted(true);
    }

    return (
        <div>
            {hasGameStarted ? <TicTacToe players={players} /> : <PlayerForm onStart={startGame} />}
        </div>
    );
};

export default Home;

