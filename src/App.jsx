import "./App.scss";
import React from "react";
import { Homepage } from "./pages/homepage/homepage.component";
import { Route, Routes, Navigate } from "react-router-dom";
import Shoppage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SigninSignupPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserDocument } from "./assets/api/firebase.api";
import { setCurrentUser } from "./redux/user/user.action";
import { connect } from "react-redux";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (!userAuth) return setCurrentUser(userAuth);

			const userRef = await createUserDocument({ userAuth });
			userRef.onSnapshot((snapshot) => {
				setCurrentUser({
					id: snapshot.id,
					...snapshot.data(),
				});
			});
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<>
				<Routes>
					<Route path="*" element={<Header />} />
				</Routes>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/shop" element={<Shoppage />} />
					<Route path="/signin" element={this.props.currentUser ? <Navigate replace to='/'/> : <SigninSignupPage/>}/>
				</Routes>
			</>
		);
	}
}

const mapStateToProp = ({user}) => ({
	currentUser: user.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProp, mapDispatchToProps)(App);
