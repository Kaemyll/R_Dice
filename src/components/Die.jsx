// Component of individual die that takes props and display the correct face of the die based on props
import React from 'react';

import diceImg from './ImagesDice';
import {Card} from "react-bootstrap";
import '../styles/Die.css';

// select an img in the array with the id of the face
// and return an img DOM element filled with the src and alt of the img
export default function Die(props) {
    return diceImg.filter((die) => die.id === props.face).map(({id, src, alt}) => (
        <div>
            <Card bg='success' border='dark' text='light' className='mb-2 justify-content-center align-middle'
                  style={{width: '10rem'}}>
                <Card.Img
                    className={`mx-auto my-5 ${props.rolling ? 'dieShake' : ''}`}
                    variant='top'
                    style={{width: '5em'}}
                    key={id}
                    src={src}
                    alt={alt}
                />
                <Card.Body>
                    <Card.Title>DIE => {props.face}</Card.Title>
                    <Card.Text>Résultat du lancer d'un dé à 6 faces</Card.Text>
                </Card.Body>
            </Card>
        </div>

    ));
}