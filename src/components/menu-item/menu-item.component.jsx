import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size}) => {
	console.log(imageUrl);
	return (
		<div className={`menu-item ${size}`}>
			<div style={{
				backgroundImage: `url(${imageUrl})`
			}} className="background-img" ></div>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
