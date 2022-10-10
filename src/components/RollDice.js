// Parent component rendered by App that renders the dice and a button to roll

import React from 'react';

import Die from './Die';

export default class RollDice extends React.Component {
	static defaultProps = {
		sides : [
			'one',
			'two',
			'three',
			'four',
			'five',
			'six'
		]
	};
	constructor(props) {
		super(props);
		this.state = {
			die1 : 'one',
			die2 : 'one'
		};
	}
	roll() {
		// pick 2 numbers between 1 and 6
		const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
	}
	render() {
		return (
			<div>
				<h1>TEST ROLLDICE Component</h1>
				<Die face={this.state.die1} />
				<Die face={this.state.die2} />
				<button onClick={this.roll}>Lancer les dés !</button>
			</div>
		);
	}
}
