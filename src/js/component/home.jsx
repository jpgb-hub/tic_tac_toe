import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Square from "./app";

//create your first component
const Home = () => {
	return (
		<div>
			<>
				<div className="board-row">
					<button className="square">1</button>
					<button className="square">2</button>
					<button className="square">3</button>
				</div>
				<div className="board-row">
					<button className="square">4</button>
					<button className="square">5</button>
					<button className="square">6</button>
				</div>
				<div className="board-row">
					<button className="square">7</button>
					<button className="square">8</button>
					<button className="square">9</button>
				</div>
			</>


		</div>


	);
};

export default Home;
