import React from "react";
import "../styles/Footer.css";

function getStringDate() {
	return <em>Last modified on {document.lastModified}</em>;
}

function Footer() {
	return (
		<a id="contact">
			<div className="footer">
				<div className="copyright">
					Copyright &copy; 2022 Ethan Misa <br /> All Rights Reserved
				</div>
				<div className="modified">{getStringDate()}</div>
				<div className="author">
					Developed by
					<br />
					Ethan Misa
				</div>
			</div>
		</a>
	);
}

export default Footer;
