import React, {Component} from "react";
import {Container, Navbar} from "react-bootstrap";
import logo from '../assets/rdice_logo.png';

export default class Header extends Component {
    render() {
        return (
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            alt='logo du site'
                            className='d-inline-block align-top'
                            width='64'
                        />{' '}
                        R DICE
                    </Navbar.Brand>
                    <Navbar.Text>
                        Learning SPA Project in React JS, by Kaemyll (2022/10)
                    </Navbar.Text>
                </Container>
            </Navbar>
        )
    }
}