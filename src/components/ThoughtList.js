import React, { Component } from 'react';
import Card from './Card';
import ProgressBar from './ProgressBar';

class ThoughtList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			thoughts: [
				{
					id: 1,
					title: 'Card title',
					subTitle: 'Card subtitle',
					thought: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
					likes: 10
				},
				{
					id: 2,
					title: 'Card title',
					subTitle: 'Card subtitle',
					thought: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
					likes: 8
				},
				{
					id: 3,
					title: 'Card title',
					subTitle: 'Card subtitle',
					thought: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
					likes: 11
				},
				{
					id: 4,
					title: 'Card title',
					subTitle: 'Card subtitle',
					thought: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
					likes: 3
				}
			]
		}

		this.updateLike = this.updateLike.bind(this);
	}

	updateLike(key, likes) {
		let newThoughts = [];
		for (var i = 0; i < this.state.thoughts.length; i++) {
			let thought = this.state.thoughts[i];
			if (thought.id === key) {
				thought.likes = likes;
			}
			newThoughts.push(thought);
		}
		this.setState({
			thoughts: newThoughts
		});
	}

	doAutoLike() {
		let newThoughts = [];
		for (var i = 0; i < this.state.thoughts.length; i++) {
			let thought = this.state.thoughts[i];
			if (Math.random() >= 0.5) {
				thought.likes += 1;
			}
			newThoughts.push(thought);
		}
		this.setState({
			thoughts: newThoughts
		})
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.autoLike) {
			var self = this;
			this.autoLikeTimer = setInterval(function() {
				var object = self;
				setTimeout(function() {
					object.doAutoLike();
				}, Math.random() * 2000);
			}, 1000 );
		} else {
			clearInterval(this.autoLikeTimer);
		}
	}

	render() {
		let likes = 0;
		let thoughtCards = [];
		for (var i = 0; i < this.state.thoughts.length; i++) {
			likes += this.state.thoughts[i].likes;
			thoughtCards.push(
				<div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={this.state.thoughts[i].id}>
					<Card key={this.state.thoughts[i].id} thought={this.state.thoughts[i]} onLike={this.updateLike} />
				</div>
			);
		}
		return (
			<div className="row" style={{marginBottom: 2 + 'rem'}}>
				<div className="col-12">
					<ProgressBar currentLikes={likes} />
				</div>
				{thoughtCards}
			</div>
		);
	}
}

export default ThoughtList;
