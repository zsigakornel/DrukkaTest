import React from 'react';
import './About.scss';
import { Container, Row, Col} from 'react-bootstrap';
import pic1 from '../assets/illustration1.svg';
import pic2 from '../assets/illustration2.svg';
import pic3 from '../assets/illustration3.svg';


class About extends React.Component{
    render(){
        return(
            <div className="about-area">
                <Container>
                <Row>
                    <Col className="title">
                        <p>ABOUT THE APP</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={pic1} alt="" className="center"/>
                    </Col>
                    <Col>
                        <img src={pic2} alt="" className="center"/>
                    </Col>
                    <Col>
                        <img src={pic3} alt="" className="center"/>
                    </Col>
                </Row>
                <Row className="content">
                    <Col>
                        <p>Keep track of your consumption while staying in a hotel.</p>
                    </Col>
                    <Col>
                        <p>Check out of your hotel in the app, so you can skip lines.</p>
                    </Col>
                    <Col>
                        <p>Browse the activities, so you can keep up with your hotels events and the best offers near you!</p>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}

export default About;
