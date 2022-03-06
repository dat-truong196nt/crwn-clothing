import React from "react";
import Signin from "../../components/sign-in/sign-in.component";
import Signup from "../../components/sign-up/sign-up.component";
import { SignInSignUpContainer } from "./sign-in-sign-up.styles";
// import './sign-in-sign-up.styles.scss'

const SigninSignupPage = () => {
	return (
		<SignInSignUpContainer>
			<Signin/>
			<Signup/>
		</SignInSignUpContainer>
	)
}

export default SigninSignupPage;