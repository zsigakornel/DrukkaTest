import React from 'react';
import './Available.scss';
import { Container, Row, Col} from 'react-bootstrap';
import bigPlant from '../assets/big-plant.svg';
import smallerPlant from '../assets/smaller-plant.svg';
import apple from '../assets/apple-brands.svg';
import android from '../assets/android-brands.svg';
import globe from '../assets/globe-solid.svg';

class Available extends React.Component{

    render(){
        return(
            <div className="about-area">
                <Container>
                <Row>
                    <Col className="title">
                        <p>AVAILABLE FOR</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <img src={smallerPlant} alt="" className="bottom-left"/>
                        <div>
                            <img src={apple} alt="" className="center-icon"/>
                            <img src={require('../assets/phone.png')} alt="" className="center"/>
                        </div>
                    </Col>
                    <Col>
                        <img src={globe} alt="" className="center-icon"/>
                        <img src={require('../assets/monitor.png')} alt="" className="center"/>
                    </Col>
                    <Col>
                    <img src={bigPlant} alt="" className="bottom-right"/>
                        <div>
                            <img src={android} alt="" className="center-icon"/>
                            <img src={require('../assets/masik.png')} alt="" className="center"/>
                        </div>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }

}

export default Available
