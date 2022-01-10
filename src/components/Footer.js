import React from "react";
import "../styles/Footer.css";

function getStringDate() {
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

	var ending;
	if (day == 12 || day == 11 || day == 13) {
		ending = "th ";
	} else if (day % 10 == 1) {
		ending = "st ";
	} else if (day % 10 == 2) {
		ending = "nd ";
	} else if (day % 10 == 3) {
		ending = "rd ";
	} else {
		ending = "th ";
	}

	return (
		<em>
			<>
				Last modified on {month} {day}
				<sup>{ending}</sup>
			</>
			<>{year}</>
		</em>
	);
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
