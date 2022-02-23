import React from "react";
import { auth, signInWithGoogle } from "../../assets/api/firebase.api";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

class Signin extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
		};
	}
	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (err) {
			console.error("Signin failed", err);
		}
	};

	handleChange = (event) => {
		let { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		let { email, password } = this.state;
		return (
			<div className="sign-in">
				<h2 className="sign-in__heading">I already have an account</h2>
				<span className="sign-in__subheading">
					Sign in with your email and password
				</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						onInput={this.handleChange}
						type="email"
						required
						name="email"
						value={email}
						label="Email"
					/>
					<FormInput
						onChange={this.handleChange}
						type="password"
						required
						name="password"
						value={password}
						label="Password"
					/>
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton type="button" onClick={signInWithGoogle}>
						Sign in with Google
					</CustomButton>
				</form>
			</div>
		);
	}
}

export default Signin;
