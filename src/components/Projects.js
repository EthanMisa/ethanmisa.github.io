import React from "react";
import "../styles/Projects.css";
import prmi from "../img/pr-mi.png";
import algo from "../img/algo-gen.png";
import sd from "../img/sd.png";
function Projects() {
	return (
		<a id="projects">
			<div className="p">
				<div className="grid">
					<div className="title">
						<h1 className="title-text">Projects</h1>
					</div>
					<div className="projects">
						<a
							href="https://github.com/EthanMisa/Financial-Portfolio-Generator"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="project">
								<img src={algo} alt="Picture of Computer" />
								<div className="project-text">
									<h1 className="project-title">
										Financial Portfolio Generator
									</h1>
									<br />
									<p className="project-desc">
										Prize-winning algorithm that creates investment portfolios
										with optimized risk to return ratios for any list of
										tickers.
									</p>
									<br />
									<p className="project-lang">
										Technologies: Python, Pandas, NumPy, YFinance.
									</p>
								</div>
							</div>
						</a>
						<a
							href="https://github.com/EthanMisa/ProtectMi"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="project">
								<img src={prmi} alt="Picture of Password" />
								<div className="project-text">
									<h1 className="project-title">Protect Mi</h1>
									<br />
									<p className="project-desc">
										Utilized object-oriented programming to build a GUI that
										generates, stores, and accesses secure passwords.
									</p>
									<br />
									<p className="project-lang">
										Technologies: Java, JavaSwing, FileReader, FileWriter.
									</p>
								</div>
							</div>
						</a>
						<a
							href="https://github.com/time-management-school-app/SchoolDule"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="project">
								<img src={sd} alt="SchoolDule Logo" />
								<div className="project-text">
									<h1 className="project-title">SchoolDule</h1>
									<br />
									<p className="project-desc">
										Full-stack time management app specifically designed to
										cater towards students who struggle managing their time.
									</p>
									<br />
									<p className="project-lang">
										Check out the project's web designer,{" "}
										<a
											href="https://www.karenhuang.me/"
											target="_blank"
											rel="noopener noreferrer"
											className="karen-link"
										>
											Karen Huang!
										</a>
										<br />
										Technologies: JavaScript, React, HTML/CSS, Bootstrap.
									</p>
								</div>
							</div>
						</a>
					</div>

					<p className="click-github">Click on them to visit the GitHub!</p>
				</div>
			</div>
		</a>
	);
}

export default Projects;
