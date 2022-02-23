import React from "react";
import Signin from "../../components/sign-in/sign-in.component";
import Signup from "../../components/sign-up/sign-up.component";
import './sign-in-sign-up.styles.scss'

const SigninSignupPage = () => {
	return (
		<div className="sign-in-sign-up">
			<Signin/>
			<Signup/>
		</div>
	)
}

export default SigninSignupPage;