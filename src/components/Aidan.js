import React from "react";

import one from "../img/IMG_0013.JPG";
import two from "../img/IMG_1377.jpg";
import three from "../img/IMG_1370.PNG";
import four from "../img/IMG_3416.PNG";
import "../styles/Aidan.css";

function Aidan() {
	return (
		<div>
			<h1>
				Here is a collection of the <em>Aidan Silveira</em>
			</h1>
			<div className="images">
				<img src={one} alt="" />
				<img src={two} alt="" />
				<img src={three} alt="" />
				<img src={four} alt="" />
			</div>
		</div>
	);
}

export default Aidan;
