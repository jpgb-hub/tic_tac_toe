import React from "react";
import TicTacToe from "./TicTacToe.jsx";
import PlayerFrom from "./players.jsx"

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
			<>
			<PlayerFrom />
			<TicTacToe />
			</>


		</div>


	);
};

export default Home;
