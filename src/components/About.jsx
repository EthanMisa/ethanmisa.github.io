import React from "react";
import "../styles/About.css";
import Headshot from "./../img/headshotIcon.png";

function About() {
	return (
		<a id="about">
			<div className="a">
				<div className="a-left">
					<div className="a-left-wrap">
						<h2 className="a-intro">Hello! My name is</h2>
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
							I am in my first year of{" "}
							<a
								href="https://uwaterloo.ca/computing-financial-management/"
								target="_blank"
								rel="noopener noreferrer"
								className="cfm-link"
							>
								Computer Science and Financial Management at the University of
								Waterloo!
							</a>{" "}
							I have interests in both software development and investing, and I
							am in pursuit of a career that combines both areas.
						</p>
						<div className="resume-cont">
							<a
								href={process.env.PUBLIC_URL + "/EthanMisaResume.pdf"}
								className="resume-link"
								target="_blank"
							>
								My Resume
							</a>
						</div>
					</div>
				</div>
				<div className="a-right">
					<div className="pic-border">
						<img src={Headshot} alt="Headshot" className="headshot" />
						<p className="quote">
							<em>"Fortune favours the brave."</em>
						</p>
					</div>
				</div>
			</div>
		</a>
	);
}

export default About;
