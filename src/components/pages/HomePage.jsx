import React from "react";
import FirstTask from "../tasks/FirstTask";
import SecondTask from "../tasks/SecondTask";

export default class HomePage extends React.Component {

	render() {
		return (
			<React.Fragment>
				<FirstTask />
				<SecondTask />
			</React.Fragment>
		)
	}

}
