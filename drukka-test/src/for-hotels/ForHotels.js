import React from 'react';
import './ForHotels.scss';
import { Container, Row, Col} from 'react-bootstrap';
import hotel1 from '../assets/hotel-icon1.svg';
import hotel2 from '../assets/hotel-icon2.svg';
import hotel3 from '../assets/hotel-icon3.svg';

class ForHotels extends React.Component{

    render(){
        return(
            <div className="customer-area">
            <Container>
            <Row>
                <Col>
                <div className="customers-text">
                    <div className="title">
                        <p>FOR HOTELS</p>
                    </div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Row>
                    <Col>
                        <img src={hotel1} alt="" className="center"/>
                        <p>"Lorem ipsum dolor sit amet,</p>
                    </Col>
                    <Col>
                        <img src={hotel2} alt="" className="center"/>
                        <p>"Lorem ipsum dolor sit amet,</p>
                    </Col>
                    <Col>
                        <img src={hotel3} alt="" className="center"/>
                        <p>"Lorem ipsum dolor sit amet,</p>
                    </Col>
                    </Row>
                </div>
                </Col>
                <Col className="hall">
                    <img src={require('../assets/hall.png')} alt=""/>
                </Col>
            </Row>

            </Container>
            </div>
        )
    }

}

export default ForHotels
