import React from 'react';
import './MyNavbar.scss';
import logo from '../assets/logo.svg';
import { Container, Navbar,  Button, Nav } from 'react-bootstrap';

class MyNavbar extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="#about">ABOUT THE APP</Nav.Link>
                  <Nav.Link href="#for-customers">FOR CUSTOMERS</Nav.Link>
                  <Nav.Link href="#available-for">AVAILABLE FOR</Nav.Link>
                  <Nav.Link href="#for-hotels">FOR HOTELS</Nav.Link>
                </Nav>
                  <Button variant="warning" className="login">LOGIN</Button>
                  <Button variant="outline-warning" className="sign-up">SIGN UP</Button>
                </Container>
              </Navbar>
        );
    }
}

export default MyNavbar;
