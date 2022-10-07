// Component of individual die that takes props and display the correct face of the die based on props
import React, { Component, useState } from 'react';

import diceImg from './ImagesDice';
import Card from './Card';

export default function Die(props) {
	let dieAsked = diceImg.filter((die) => die.id === this.props.face);
	console.log(dieAsked);
	const [
		item,
		setItem
	] = useState(diceImg);
	return (
		<div>
			{this.props.face}
			<h1>DIE !</h1>
			{diceImg.map(({ id, src, alt }) => <img key={id} src={src} alt={alt} />)}
			<h2>Test face props</h2>
			<img key={dieAsked.id} src={dieAsked.src} alt={dieAsked.alt} />
			<h2>Test Filter component avec useState</h2>
			<Card item={item} />
		</div>
	);
}

// export default class Die extends Component {
// 	render() {
// 		let dieAsked = diceImg.filter((die) => die.id === this.props.face);
// 		console.log(dieAsked);
// 		const [
// 			item,
// 			setItem
// 		] = useState(diceImg);
// 		return (
// 			<div>
// 				{this.props.face}
// 				<h1>DIE !</h1>
// 				{diceImg.map(({ id, src, alt }) => <img key={id} src={src} alt={alt} />)}
// 				<h2>Test face props</h2>
// 				<img key={dieAsked.id} src={dieAsked.src} alt={dieAsked.alt} />
// 				<h2>Test Filter component avec useState</h2>
// 				<Card item={item} />
// 			</div>
// 		);
// 	}
// }
