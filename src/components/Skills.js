import React from "react";
import "../styles/Skills.css";

import yf from "../img/yfinance.png";
function Skills() {
	return (
		<a id="skills">
			<div className="s">
				<div className="grid">
					<div className="title">
						<h1 className="title-text">My Skills</h1>
					</div>
					<div className="languages">
						<div className="lang-text">Languages</div>
						<div className="python">Python</div>
						<div className="js">JavaScript</div>
						<div className="java">Java</div>
						<div className="c">C</div>{" "}
					</div>
					<div className="frameworks">
						<div className="react">React</div>
						<div className="yf">
							<img className="yf-img" src={yf} alt="" />
							yFinance
						</div>
						<div className="pand">Pandas</div>
						<div className="num">Numpy</div>
						<div className="bs">BootStrap</div>
						<div className="plt">Matplotlib</div>
						<div className="git">Git</div>
						<div className="ex">Excel</div>
						<div className="frame-text">Frameworks</div>
					</div>
				</div>
			</div>
		</a>
	);
}

export default Skills;
