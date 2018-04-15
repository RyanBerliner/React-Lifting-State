import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);

		this.toggleAutoLike = this.toggleAutoLike.bind(this);
	}

	toggleAutoLike(e) {
		let newVal = !this.props.autoLike;
		this.props.liftAutoLike(newVal);
		e.preventDefault();
	}

	render() {
		let fontAwesome = <i className="fas fa-play"></i>;
		let text = 'Play';
		let style = {
			color: '#28a745',
			cursor: 'pointer'
		}
		if (this.props.autoLike) {
			fontAwesome = <i className="fas fa-pause"></i>;
			text = 'Pause';
			style.color = '#dc3545';
		}
		return (
			<nav className="navbar navbar-light bg-light justify-content-between fixed-top">
				<span className="navbar-brand mb-0 h1">Test React</span>
				<a onMouseDown={this.toggleAutoLike} style={style}>{fontAwesome} {text}</a>
			</nav>
		);
	}
}

export default Header;
