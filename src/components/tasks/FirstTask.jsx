import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FirstTaskReducer from "../../reducers/FirstTaskReducer";

class FirstTask extends React.Component {

	render() {
		return (
			<div className="task" id="first-task">
				<div className="title">Task #1</div>
				<div className="content">
					<div className="in">
						<input
							type="text"
							ref={(node) => {
								this.input = node;
							}}
						/>
						<button onClick={() => this.props.add(this.input.value)}>
							Add
						</button>
					</div>
					<div className="out">
						{this.props.list.map((element, index) =>
							<div key={index}>
								<div>{element}</div>
								<button onClick={() => this.props.remove(index)}>
									Delete
							</button>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}

}

FirstTask.propTypes = {
	list: PropTypes.array.isRequired,
};

export default connect(
	(state) => ({
		list: state.firstTask.list,
	}),
	(dispatch) => ({
		add: (element) => dispatch(FirstTaskReducer.actions.add(element)),
		remove: (index) => dispatch(FirstTaskReducer.actions.remove(index)),
	}),
)(FirstTask);
