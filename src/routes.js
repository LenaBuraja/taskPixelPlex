import React from "react";
import { Route, Switch } from "react-router";
import App from "./containers/App";
import HomePage from "./components/pages/HomePage";

export default class Routes extends React.Component {

	render() {
		return (
			<App>
				<Switch>
					<Route exact path="/" component={HomePage} />
				</Switch>
			</App>
		);
	}

}
