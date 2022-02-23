import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../assets/api/firebase.api";

const Header = ({ currentUser }) => {
	return (
		<header className="header">
			<Link to="/" className="logo-container">
				<Logo className="logo" />
			</Link>
			<nav className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/shop">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={auth.signOut}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
			</nav>
		</header>
	);
};

export default Header;
