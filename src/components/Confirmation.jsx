//mailto: examples
//https://stackoverflow.com/questions/4782068/can-i-set-subject-content-of-email-using-mailto

import React, { Component } from "react";
import { Button, List } from "semantic-ui-react";

class Confirmation extends Component {
	saveAndContinue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const {
			values: {
				firstName,
				lastName,
				email,
				phoneNumber,
				licName,
				licPosition,
				licNumber,
				licEmail
			}
		} = this.props;
		console.log({ email }.email);

		var eTo = encodeURI("sales@example.com");
		var eSubj = encodeURI("Submission From Quote Creator");
		var eBody = encodeURI(
			"Please enter your contact information and message here: \n\n\nQuote:\n#17350  IFW 2-inch -$829.00\n"
		);

		var emails = "mailto:" + eTo + "?subject=" + eSubj + "&body=" + eBody;

		//document.getElementById("sales").href = email;

		return (
			<div>
				<h1 className="ui centered">Confirm your Details</h1>
				<p>{firstName}</p>
				<p>
					Click Confirm if the following details have been correctly entered
				</p>
				<List>
					<List.Item>
						<List.Icon name="users" />
						<List.Content>First Name: {firstName}</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="users" />
						<List.Content>Last Name: {lastName}</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="mail" />
						<List.Content>
							<List.Content>
								Email:{" "}
								<a
									href={
										"mailto:" +
										{ email }.email +
										"?body=The subject" +
										"?subject=The body"
									}
								>
									{email}
								</a>
								Email:{" "}
								<a
									href={
										"mailto:" +
										{ email }.email +
										"?subject=" +
										"INSPECTIOn" +
										"&body=Woah, Im writing the email for you O.O"
									}
								>
									Mailto Link w/ subject + body
								</a>
							</List.Content>

							{/* <a href="mailto:jack@semantic-ui.com">Email: {email}</a> */}
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="phone" />
						<List.Content>Phone Number: {phoneNumber}</List.Content>
					</List.Item>

					<br />
					<br />

					<List.Item>
						<List.Icon name="users" />
						<List.Content>Licensee Name: {licName}</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="users" />
						<List.Content>Licensee Position: {licPosition}</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="phone" />
						<List.Content>Licensee Telephone: {licNumber}</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="mail" />
						<List.Content>Licensee Email: {licEmail}</List.Content>
					</List.Item>
				</List>

				<Button onClick={this.back}>Back</Button>
				<Button onClick={this.saveAndContinue}>Confirm</Button>
			</div>
		);
	}
}

export default Confirmation;
