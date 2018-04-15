import React, { Component } from 'react';

class Card extends Component {
	constructor(props) {
		super(props);
		this.likeThought = this.likeThought.bind(this);
	}

	likeThought() {
		this.props.onLike(this.props.thought.id, this.props.thought.likes + 1);
	}

	render() {
		let heartStyle = {
			cursor: 'pointer',
			color: '#dc3545'
		}
		return (
			<div className="card" data-id={this.props.thought.id}>
				<div className="card-body">
					<h5 className="card-title">{this.props.thought.title}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{this.props.thought.subTitle}</h6>
					<p className="card-text">{this.props.thought.thought}</p>
					<span onMouseDown={this.likeThought} style={heartStyle}><i className="fas fa-heart"></i> {this.props.thought.likes}</span>
				</div>
			</div>
		);
	}
}

export default Card;
