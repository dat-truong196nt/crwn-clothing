import React from "react";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../assets/api/firebase.api";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropdown.component";
import {
	HeaderContainer,
	LogoContainer,
	OptionContainer,
	OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>
			<OptionContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/shop">CONTACT</OptionLink>
				{currentUser ? (
					<OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
				) : (
					<OptionLink to="/signin">SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionContainer>
			{!hidden && <Cart hidden={hidden} />}
		</HeaderContainer>
	);
};

const mapStateToProp = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});

export default connect(mapStateToProp)(Header);
