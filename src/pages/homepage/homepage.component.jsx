import React from "react";
import DirectoryMenu from "../../components/directory-menu/directory-menu.component";
import { HomePageContainer } from "./homepage.styles";
// import "./homepage.styles.scss";

export const Homepage = () => {
	return (
		<HomePageContainer>
			<DirectoryMenu />
		</HomePageContainer>
	);
};
