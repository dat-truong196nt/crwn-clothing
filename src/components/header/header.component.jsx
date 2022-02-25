import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../assets/api/firebase.api";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => {
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
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</nav>
			{!hidden && <Cart hidden={hidden}/>}
		</header>
	);
};

const mapStateToProp = ({user: {currentUser}, cart: {hidden} }) => ({currentUser, hidden})

export default connect(mapStateToProp)(Header);
