import React from "react";
import "../styles/Skills.css";

import ja from "../img/ja.png";
import js from "../img/js.png";
import py from "../img/py.png";
import c from "../img/c.png";
function Skills() {
	return (
		<a id="skills">
			<div className="s">
				<div className="grid">
					<div className="title">
						<h1 className="title-text">Skills</h1>
					</div>
					<div className="languages">
						<div className="logo-div js">
							<img src={js} alt="JavaScript Logo" />
						</div>
						<div className="logo-div">
							<img src={ja} alt="Java Logo" />
						</div>
						<div className="logo-div">
							<img src={py} alt="Python Logo" />
						</div>
						<div className="logo-div">
							<img src={c} alt="C Logo" />
						</div>
					</div>
					<div className="frameworks">
						<div className="framework-text">React</div>
						<div className="framework-text">HTML</div>
						<div className="framework-text">CSS</div>
						<div className="framework-text">BootStrap</div>
						<div className="framework-text">YFinance</div>
						<div className="framework-text">Pandas</div>
						<div className="framework-text">NumPy</div>
						<div className="framework-text">Git</div>
					</div>
				</div>
			</div>
		</a>
	);
}

export default Skills;
