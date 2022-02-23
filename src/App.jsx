import "./App.scss";
import React from "react";
import { Homepage } from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import Shoppage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SigninSignupPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserDocument } from "./assets/api/firebase.api";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (!userAuth) return this.setState({ currentUser: userAuth });

			const userRef = await createUserDocument({ userAuth });
			userRef.onSnapshot((snapshot) => {
				this.setState({
					currentUser: {
						id: snapshot.id,
						...snapshot.data(),
					},
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
					<Route
						path="*"
						element={<Header currentUser={this.state.currentUser} />}
					/>
				</Routes>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/shop" element={<Shoppage />} />
					<Route path="/signin" element={<SigninSignupPage />} />
				</Routes>
			</>
		);
	}
}

export default App;
