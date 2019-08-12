import React from 'react';
import './MyNavbar.scss';
import logo from '../assets/logo.svg';
import { Container, Navbar,  Button, Nav } from 'react-bootstrap';

class MyNavbar extends React.Component{

    render(){
        return (
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="">ABOUT THE APP</Nav.Link>
                  <Nav.Link href="">FOR CUSTOMERS</Nav.Link>
                  <Nav.Link href="">AVAILABLE FOR</Nav.Link>
                  <Nav.Link href="">FOR HOTELS</Nav.Link>
                </Nav>
                  <Button variant="warning" className="login">LOG IN</Button>
                  <Button variant="outline-warning" className="sign-up">SIGN UP</Button>
                </Container>
              </Navbar>
        );
    }
}

export default MyNavbar;
