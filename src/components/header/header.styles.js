import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	padding: 25px;
	display: flex;
	align-items: center;
`;

export const OptionContainer = styled.nav`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
`;
