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
import CheckoutPage from "./pages/checkout/checkout.component";
import CollectionPage from "./pages/collection/collection.component";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (!userAuth) return setCurrentUser(userAuth);

			const userRef = await createUserDocument({ userAuth });
			userRef.onSnapshot((snapshot) => {
				this.props.setCurrentUser({
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
					<Route path="/shop" >
						<Route path={""} element={<Shoppage />} />
						<Route path={":collectionId"} element={<CollectionPage />} />
					</Route>
					<Route path="/checkout" element={<CheckoutPage />} />
					<Route
						path="/signin"
						element={
							this.props.currentUser ? (
								<Navigate replace to="/" />
							) : (
								<SigninSignupPage />
							)
						}
					/>
					<Route path="*" element={<div>Page not Found</div>} />
				</Routes>
			</>
		);
	}
}
const mapStateToProp = ({ user: { currentUser } }) => ({
	currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProp, mapDispatchToProps)(App);
