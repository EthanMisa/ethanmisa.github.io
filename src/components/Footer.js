import React from "react";
import "../styles/Footer.css";

function Footer() {
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const date = new Date();
	var [month, day, year] = [
		monthNames[date.getMonth()],
		date.getDate(),
		date.getFullYear(),
	];
	return (
		<a id="contact">
			<div className="footer">
				<div className="copyright">
					Copyright &copy; {year}, Ethan Misa <br /> All Rights Reserved
				</div>
				<div className="modified">
					{`Last modified on ${month + " " + day + " " + year}`}
				</div>
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
