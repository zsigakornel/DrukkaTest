import React from 'react';
import './GetStarted.scss';
import { Container, Button, Row, Col} from 'react-bootstrap';


class GetStarted extends React.Component{

    render(){
        return(
            <div className="hero-area">
                <div className="hero-content">
                <Container>
                <Row>
                    <Col>
                    <div className="help">
                        CHECK YOURSELF & HELP YOURSELF
                    </div>
                    <br />
                    <div className="lorem">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <br />
                    <div className="get-started">
                        <Button>GET STARTED</Button>
                    </div>
                    <br />
                    <div>
                        <img className="ios" alt="" src={require('../assets/ios-logo.png')}/>
                        <img className="android" alt="" src="https://www.google.com/intl/hu/cast/about/static/images/download-badges/android-download.png"/>
                    </div>
                    </Col>
                    <Col className="mobiles"><img src={require('../assets/mobiles.png')} alt=""/></Col>
                </Row>
                </Container>
                </div>
            </div>
        );
    }

}

export default GetStarted;
