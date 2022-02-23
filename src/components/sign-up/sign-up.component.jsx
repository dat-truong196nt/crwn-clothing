import React from "react";
import { auth, createUserDocument } from "../../assets/api/firebase.api";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

class Signup extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) return alert("password don't match");

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserDocument({
				userAuth: { email, displayName, uid: user.uid },
			});
			this.setState = {
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			};
		} catch (err) {
			console.log("Failed to sign up new user", err);
		}
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="sign-up__heading">I'm not have an account</h2>
				<span className="sign-up__subheading">Create an account</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						onChange={this.handleChange}
						label="displayName"
						name="displayName"
						value={displayName}
						required
					/>
					<FormInput
						type="email"
						onChange={this.handleChange}
						label="email"
						name="email"
						value={email}
						required
					/>
					<FormInput
						type="password"
						onChange={this.handleChange}
						label="password"
						name="password"
						value={password}
						required
					/>
					<FormInput
						type="password"
						onChange={this.handleChange}
						label="confirmPassword"
						name="confirmPassword"
						value={confirmPassword}
						required
					/>
					<CustomButton onClick={this.handleSubmit}>Sign up</CustomButton>
				</form>
			</div>
		);
	}
}

export default Signup;
