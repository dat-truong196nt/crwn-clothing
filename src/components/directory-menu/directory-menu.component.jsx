import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.styles.scss";
import "./sections.data";
import SECTIONS_DATA from "./sections.data";

class DirectoryMenu extends Component {
	constructor() {
		super();
		this.state = {
			sections: SECTIONS_DATA,
		};
	}

	render() {
		const { sections } = this.state;
		return (
			<div className="directory-menu">
				{sections.map(({ id, ...otherProps }) => (
					<MenuItem key={id} {...otherProps} />
				))}
			</div>
		);
	}
}

export default DirectoryMenu;
