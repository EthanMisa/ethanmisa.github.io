import React from "react";
import "../styles/About.css";
import Headshot from "./../img/headshotIcon.png";

function About() {
	return (
		<div className="a bg">
			<div className="a-left">
				<div className="a-left-wrap">
					<h2 className="a-intro primary">Hello! My name is</h2>
					<h1 className="a-name">Ethan Misa</h1>
					<div className="a-title">
						<div className="a-title-wrap">
							<div className="a-title-item">Student</div>
							<div className="a-title-item">Investor</div>
							<div className="a-title-item">Developer</div>
							<div className="a-title-item">Athlete</div>
						</div>
					</div>
					<p className="a-desc secondary">
						I am in my first year of Computer Science and Financial Management
						at the University of Waterloo! I have interests in both software
						development and investing, and I am in pursuit of a career that
						combines both areas.
					</p>
				</div>
			</div>
			<div className="a-right">
				<div className="pic-border">
					<img src={Headshot} alt="Headshot" className="headshot" />
				</div>
			</div>
		</div>
	);
}

export default About;
