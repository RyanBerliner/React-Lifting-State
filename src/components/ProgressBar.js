import React, { Component } from 'react';

class ProgressBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			goal: 100
		}

		this.handleGoalChange = this.handleGoalChange.bind(this);
	}

	calcPercentage() {
		let goal = this.state.goal;
		if (goal === '' || goal <= 0) {
			return 0;
		}
		return this.props.currentLikes / goal * 100;
	}

	handleGoalChange(e) {
		let newGoal = e.target.value;
		this.setState({
			goal: newGoal
		});
	}

	render() {
		let progressBarStyle = {
			paddingTop: 30 + 'px',
			paddingBottom: 30 + 'px'
		}
		let percentage = this.calcPercentage();
		let barStyle = {
			width: percentage + '%'
		}
		return (
			<div className="ProgressBar" style={progressBarStyle}>
				<div className="input-group mb-3" style={{display: 'none'}}>
					<input type="number" className="form-control" placeholder="Enter a goal amount" value={this.state.goal} onChange={this.handleGoalChange} />
						<div className="input-group-append">
							<span className="input-group-text">Likes Goal</span>
						</div>
				</div>
				<div className="progress">
					<div className="progress-bar"
							 style={barStyle}
							 role="progressbar"
							 aria-valuenow={this.props.currentLikes}
							 aria-valuemin="0"
							 aria-valuemax={this.state.goal}></div>
				</div>
			</div>
		);
	}
}

export default ProgressBar;
