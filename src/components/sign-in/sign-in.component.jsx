import React from "react";
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
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: "", password: "" });
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
					<CustomButton type="submit">
						Sign in
					</CustomButton>
				</form>
			</div>
		);
	}
}

export default Signin;
