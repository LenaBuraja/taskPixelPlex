import React from "react";
import CustomSlider from "../items/Slider";

export default class SecondTask extends React.Component {

	constructor(...props) {
		super(...props);
		this.startTime = new Date().getTime();
		this.timeout = null;
		this.state = { value: null, counter: 0 };
	}

	onUpdate(value) {
		if (value === 0) value = 1;
		if (this.timeout) clearTimeout(this.timeout);
		const currentTime = new Date().getTime();
		const dTime = currentTime - this.startTime;
		const newCounter = Math.floor(dTime / value) * value;
		this.timeout = setTimeout(() => this.onUpdate(value), newCounter + value - dTime);
		this.setState({ ...this.state, value, counter: newCounter });
	}

	render() {
		return (
			<div className="task" id="second-task">
				<div className="title">Task #2</div>
				<div className="content">
					<div className="in">
						<div>Increase: {this.state.value}</div>
						<CustomSlider onChange={(value) => this.onUpdate(value)} />
					</div>
					<div className="out">
						<div>Counter: {this.state.counter}</div>
					</div>
				</div>
			</div>
		);
	}

}
