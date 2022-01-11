import React from "react";
import "../styles/Footer.css";

function getStringDate() {
	return <em>Last modified on {document.lastModified}</em>;
}

function Footer() {
	return (
		<a id="contact">
			<div className="footer">
				<div className="copyright">Copyright &copy; 2022 Ethan Misa </div>
				<div className="modified">
					<em>Last modified on {document.lastModified.split(" ")[0]}</em>
				</div>
				<div className="author">Developed by Ethan Misa</div>
			</div>
		</a>
	);
}

export default Footer;
