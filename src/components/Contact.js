import React, { useRef } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_mz6jmvu",
				"service_mz6jmvu",
				form.current,
				"user_Z2tTeJ8Fhfi9qP7BeUWrG"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<a id="contact">
			<div className="c">
				<form ref={form} onSubmit={sendEmail}>
					<label>Name</label>
					<input type="text" name="user_name" />
					<label>Email</label>
					<input type="email" name="user_email" />
					<label>Message</label>
					<textarea name="message" />
					<input type="submit" value="Send" />
				</form>
			</div>
		</a>
	);
}

export default Contact;
