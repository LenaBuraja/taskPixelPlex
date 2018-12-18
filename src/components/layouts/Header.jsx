import React from "react";
import { NavLink } from "react-router-dom";
import ImgLogo from "../../assets/images/logo.png";

export default class Header extends React.Component {

	render() {
		return (
			<div id="header">
				<img id="logo" src={ImgLogo} />
				<div id="navigation">
					<NavLink to="/">Home link</NavLink>
					<a href="https://pixelplex.io/" rel="noopener noreferrer" target="_blank">
						Pixelplex link
					</a>
				</div>
			</div>
		);
	}

}
