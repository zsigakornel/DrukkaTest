import React from 'react';
import './ForCustomers.scss';
import { Container, Row, Col} from 'react-bootstrap';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';

class ForCustomers extends React.Component{

    render(){
        return(
            <div className="customer-area">
            <Container>
            <Row>
                <Col className="bar">
                    <img src={require('../assets/bar.png')} alt=""/>
                </Col>
                <Col>
                <div className="customers-text">
                    <div className="title">
                        <p>FOR CUSTOMERS</p>
                    </div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Row>
                    <Col>
                        <img src={icon1} alt="" className="center"/>
                        <p>"Lorem ipsum dolor sit amet,</p>
                    </Col>
                    <Col>
                        <img src={icon2} alt="" className="center"/>
                        <p>"Lorem ipsum dolor sit amet,</p>
                    </Col>
                    <Col>
                        <img src={icon3} alt="" className="center"/>
                        <p>"Lorem ipsum dolor sit amet,</p>
                    </Col>
                    </Row>
                </div>
                </Col>
            </Row>

            </Container>
            </div>
        )
    }

}

export default ForCustomers
