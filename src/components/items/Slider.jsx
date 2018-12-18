import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

class CustomSlider extends React.Component {

	constructor(...props) {
		super(...props);
		this.state = { value: 2000 };
		this.props.onChange(this.state.value);
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Slider
					classes={{ container: classes.slider }}
					value={this.state.value}
					min={0}
					max={5000}
					step={100}
					onChange={(_, value) => {
						this.setState({ value });
						this.props.onChange(value);
					}}
				/>
			</div>
		);
	}
}

CustomSlider.propTypes = {
	classes: PropTypes.object.isRequired,
	onChange: PropTypes.func,
};

CustomSlider.defaultProps = {
	onChange: () => null,
};

export default withStyles({
	root: { width: 300 },
})(CustomSlider);
