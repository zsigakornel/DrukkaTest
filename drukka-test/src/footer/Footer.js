import React from 'react';
import './Footer.scss';
import { Container, Row, Col} from 'react-bootstrap';
import icon from '../assets/big-icon.svg';
import email from '../assets/EMAIL.svg';
import phone from '../assets/phone-icon.svg';
import web from '../assets/webpage.svg';
import place from '../assets/place.svg';

class Footer extends React.Component{

    render(){
        return(
            <div className="footer-content">
                <Container>
                    <Row>
                        <Col className="right">
                                <img src={icon} alt=""/>
                        </Col>
                        <Col>
                                <hr className="line" />
                        </Col>
                        <Col className="left">
                            <div>
                                <p><img src={place} alt=""/> Unnamed Road, London NW1 4RT, England</p>
                                <p><img src={email} alt=""/> info@hotelapp.co</p>
                                <p><img src={web} alt=""/> www.hotelapp.co</p>
                                <p><img src={phone} alt=""/> +44 20 1234 5678</p>
                            </div>
                        </Col>

                    </Row>
                    <Row>
                        <Col className="center">
                            <p>© 2019 Servee Kft. All rights reserved. | Terms of use | Privacy Policy | Licenses</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Footer
