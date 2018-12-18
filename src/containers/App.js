import React from "react";
import PropTypes from "prop-types"
import "../assets/styles.scss";
import Header from "../components/layouts/Header";

export default class App extends React.Component {

	render() {
		const { children } = this.props;
		return (
			<div>
				<Header />
				{children}
			</div>
		);
	}

}

App.propTypes = {
	children: PropTypes.any.isRequired,
};
