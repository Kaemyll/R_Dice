// Component of individual die that takes props and display the correct face of the die based on props
import { key } from 'fontawesome';
import React, { Component } from 'react';

import diceImg from './ImagesDice';

// select an img in the array with the id of the face
// and return an img DOM element filled with the src and alt of the img
export default function returnDiceImgDOMElement(props) {
	return diceImg.filter((die) => die.id === props.face).map(({ id, src, alt }) => (
		<div>
			<h1>DIE ! {props.face}</h1>
			<img key={id} src={src} alt={alt} />
		</div>

	));
}