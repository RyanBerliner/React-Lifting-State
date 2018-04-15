import React, { Component } from 'react';
import Header from './Header';
import ThoughtList from './ThoughtList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAutoLiking: false
		}

		this.updateAutoLiking = this.updateAutoLiking.bind(this);
		this.toggleAuto = this.toggleAuto.bind(this);
	}

	updateAutoLiking(newVal) {
		this.setState({
			isAutoLiking: newVal
		});
	}

	toggleAuto() {
		let newVal = !this.state.isAutoLiking;
		this.updateAutoLiking(newVal);
	}

	render() {
		let fontAwesome = <i className="fas fa-play"></i>;
		let text = 'Play Simulation';
		let btnClass = 'btn btn-lg btn-';
		if (this.state.isAutoLiking) {
			fontAwesome = <i className="fas fa-pause"></i>;
			text = 'Pause Simulation';
			btnClass += 'danger';
		} else {
			btnClass += 'success';
		}
		return (
			<div className="App" style={{paddingTop: 55 + 'px'}}>
				<Header autoLike={this.state.isAutoLiking} liftAutoLike={this.updateAutoLiking}/>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Lifting State</h1>
						<p className="lead">Pretty new to react, so this is practicing lifting state, doing things with props, things like that.</p>
						<hr className="my-4" />
						<p className="mb-4">
							You can click on the heart to add a like, and see the progress to the goal of 100 likes. Or you can play the simulation
							to let the auto add likes and watch it do it's thing.
						</p>
						<p className="lead">
							<button className={btnClass} onMouseDown={this.toggleAuto}>{fontAwesome} {text}</button>
						</p>
					</div>
				</div>
				<div className="container">
					<ThoughtList autoLike={this.state.isAutoLiking}/>
				</div>
			</div>
		);
	}
}

export default App;
