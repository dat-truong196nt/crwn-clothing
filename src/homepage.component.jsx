import React from "react";
import './homepage.style.scss'

export const Homepage = () => {
	return (
	<div className="homepage">
		<div className="directory-menu">
			<div className="menu-item">
				<div className="content">
					<h1 className="title">HATS</h1>
					<span className="subtitle">Shopnow</span>
				</div>
			</div>
			<div className="menu-item">
				<div className="content">
					<h1 className="title">Jackets</h1>
					<span className="subtitle">Shopnow</span>
				</div>
			</div>
			<div className="menu-item">
				<div className="content">
					<h1 className="title">Sneakers</h1>
					<span className="subtitle">Shopnow</span>
				</div>
			</div>
			<div className="menu-item">
				<div className="content">
					<h1 className="title">Womens</h1>
					<span className="subtitle">Shopnow</span>
				</div>
			</div>
			<div className="menu-item">
				<div className="content">
					<h1 className="title">Mens</h1>
					<span className="subtitle">Shopnow</span>
				</div>
			</div>
		</div>
	</div>
	)
}