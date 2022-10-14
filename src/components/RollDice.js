// Parent component rendered by App that renders the dice and a button to roll

import React from 'react';

import Die from './Die';
import {Button, Col, Container, Row} from "react-bootstrap";
import '../styles/Die.css';

export default class RollDice extends React.Component {
    static defaultProps = {
        sides: [
            1,
            2,
            3,
            4,
            5,
            6
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            die1: 1,
            die2: 1,
            rolling: false,
            score: 0
        };
        this.roll = this.roll.bind(this);
        this.updateRollsNb = this.updateRollsNb.bind(this);
    }

    // Meilleure façon que celle-ci :
    // this.setState(score: this.state.score +1)
    // car asynchrone et donc possiblement ancien état pas forcément encore mis à jour lors de la résolution du suivant
    incrementRoll(curState){
        return { score: curState.score + 1};
    }
    // Update the number of rolls since the last page loading
    updateRollsNb(){
        this.setState(this.incrementRoll);
    }

    // manage the dice rolls
    roll() {
        // pick 2 rolls with 6 faces dices
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        // set state with new rolls
        this.setState({die1: newDie1, die2: newDie2, rolling: true});
        // wait a second before set rolling state to false again
        setTimeout(() => {
            this.setState({rolling: false});
        }, 1000);
        this.updateRollsNb();
    }

    render() {
        return (
            <Container fluid className='p-5'>
                <Row className='justify-content-md-center'>
                    <Col md='auto'>
                        <Die face={this.state.die1} rolling={this.state.rolling}/>
                    </Col>
                    <Col md='2'>

                    </Col>
                    <Col md='auto'>
                        <Die face={this.state.die2} rolling={this.state.rolling}/>
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col className='text-center'>
                        <p>Nombre de lancers : {this.state.score}</p>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <Button
                            variant="success"
                            onClick={this.roll}
                            disabled={this.state.rolling}
                        >
                            {this.state.rolling ? 'Lancement...' : 'Lancer les dés !'}
                        </Button>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

            </Container>
        );
    }
}
