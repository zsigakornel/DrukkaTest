import React from 'react';
import './Contact.scss';
import { Container, Row, Col, Button} from 'react-bootstrap';
import hotel from '../assets/hotel.svg';

class Contact extends React.Component{

    render(){
        return(
            <div className="contact-area">
                <Container>
                <div>
                    <Row >

                        <Col className="info">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className="contact-us">
                                <Button>CONTACT US</Button>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img src={hotel} alt=""/>
                            </div>
                        </Col>

                    </Row>
                    </div>
                </Container>
            </div>
        );
    }

}

export default Contact
