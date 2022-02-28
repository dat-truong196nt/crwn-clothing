import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { connect } from "react-redux";

const DirectoryMenu = ({ sections }) => {
	return (
		<div className="directory-menu">
			{sections.map(({ id, ...otherProps }) => (
				<MenuItem key={id} {...otherProps} />
			))}
		</div>
	);
};

const mapStateToProps = (state) =>
	createStructuredSelector({
		sections: selectDirectorySections,
	});

export default connect(mapStateToProps)(DirectoryMenu);
