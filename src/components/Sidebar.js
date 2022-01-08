import React from "react";
import "../styles/App.css";

function Sidebar() {
	return (
		<nav className="sidebar">
			<ul className="sidebar-nav">
				<li className="logo">
					<a href="#" className="logo-link">
						<span className="logo-big">Ethan Misa</span>
						<span className="logo-small">EM</span>
					</a>
				</li>

				<li className="nav-item">
					<a href="#" className="nav-link">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
								d="M18,12c0-3.3-2.7-6-6-6s-6,2.7-6,6c0,2.6,1.7,4.8,4,5.7V21c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1v-3.3 C16.3,16.8,18,14.6,18,12z"
								opacity=".3"
							/>
							<path d="M21 11H24V13H21zM0 11H3V13H0zM11 0H13V3H11z" />
							<path
								d="M18.4 17.9H20.4V20.9H18.4z"
								transform="rotate(-45.001 19.423 19.424)"
							/>
							<path
								d="M3.6 3.1H5.6V6.1H3.6z"
								transform="rotate(-45.001 4.575 4.575)"
							/>
							<path
								d="M17.9 3.6H20.9V5.6H17.9z"
								transform="rotate(-45.009 19.424 4.575)"
							/>
							<path
								d="M3.1 18.4H6.1V20.4H3.1z"
								transform="rotate(-44.992 4.574 19.423)"
							/>
							<path d="M13 23h-2c-1.1 0-2-.9-2-2v-2.7c-2.4-1.1-4-3.6-4-6.3 0-3.9 3.1-7 7-7 3.9 0 7 3.1 7 7 0 2.7-1.6 5.2-4 6.3V21C15 22.1 14.1 23 13 23zM12 7c-2.8 0-5 2.2-5 5 0 2.1 1.3 4 3.3 4.7l.7.2V21h2v-4.1l.7-.2c2-.7 3.3-2.6 3.3-4.7C17 9.2 14.8 7 12 7zM0 11H3V13H0z" />
						</svg>
						<span className="link-text">Skills</span>
					</a>
				</li>

				<li className="nav-item">
					<a href="#" className="nav-link">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M3 7H21V19H3z" opacity=".3" />
							<path d="M20,6h-8l-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18H4V8h16V18z" />
						</svg>
						<span className="link-text">Projects</span>
					</a>
				</li>

				<li className="nav-item">
					<a href="#" className="nav-link">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M20,21H4c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h3V5c0-1.1,0.9-2,2-2h6c1.1,0,2,0.9,2,2v1h3c1.1,0,2,0.9,2,2v11 C22,20.1,21.1,21,20,21z M4,8v11h16V8h-3c-1.1,0-2-0.9-2-2V5H9v1c0,1.1-0.9,2-2,2H4z" />
							<path d="M12 17c-2.2 0-4-1.8-4-4 0-2.2 1.8-4 4-4 2.2 0 4 1.8 4 4C16 15.2 14.2 17 12 17zM12 11c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2 1.1 0 2-.9 2-2C14 11.9 13.1 11 12 11zM18 9A1 1 0 1 0 18 11 1 1 0 1 0 18 9z" />
							<path
								d="M20,7h-3c-0.5,0-1-0.4-1-1V5c0-0.6-0.4-1-1-1H9C8.4,4,8,4.4,8,5v1 c0,0.6-0.4,1-1,1H4C3.5,7,3,7.4,3,8v11c0,0.5,0.5,1,1,1h16c0.5,0,1-0.5,1-1V8C21,7.4,20.5,7,20,7z M12,16c-1.7,0-3-1.3-3-3 s1.3-3,3-3s3,1.3,3,3S13.7,16,12,16z"
								opacity=".3"
							/>
						</svg>
						<span className="link-text">Media</span>
					</a>
				</li>

				<li className="nav-item" id="themeButton">
					<a href="#" className="nav-link">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
								d="M18,3H6C5.448,3,5,3.448,5,4v16c0,0.552,0.448,1,1,1h12c0.552,0,1-0.448,1-1V4C19,3.448,18.552,3,18,3z M12,7c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2s-2-0.895-2-2C10,7.895,10.895,7,12,7z M8,17c0-1.657,1.343-3,3-3h2c1.657,0,3,1.343,3,3H8z"
								opacity=".3"
							/>
							<path d="M12 12c1.682 0 3-1.317 3-3s-1.318-3-3-3S9 7.317 9 9 10.318 12 12 12zM12 8c.58 0 1 .421 1 1s-.42 1-1 1-1-.421-1-1S11.42 8 12 8zM12 13c-2.851 0-5 1.455-5 3.384V18h10v-1.616C17 14.455 14.851 13 12 13zM9.146 16c.363-.496 1.384-1 2.854-1s2.49.504 2.854 1H9.146z" />
							<path d="M4,20V4c0-1.103,0.897-2,2-2h12c1.103,0,2,0.897,2,2v16c0,1.103-0.897,2-2,2H6C4.897,22,4,21.103,4,20z M18,4H6v16.001L18,20V4z" />
						</svg>
						<span className="link-text">Connect!</span>
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Sidebar;
