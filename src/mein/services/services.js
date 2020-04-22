import React,{Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './services.css';

export default class Services extends Component{
    render() {
        return(
            <div className='services comp'>
                <div className='hr'>
                <hr/>
                </div>
                <br/>
                <br/>
                <Container>
                    <h4 className='span serviceTitle'>OUR SERVICES</h4>
                    <Row>
                        <Col  xs={4}>
                            <i className="fas fa-clinic-medical"></i>
                            <div>
                                <p>IMMEDIATE SERVICE</p>
                            </div>
                        </Col>
                        <Col  xs={4}>
                            <i className="fas fa-user-md"></i>
                            <div>
                                <p>IMMEDIATE SERVICE</p>
                            </div>
                        </Col>
                        <Col  xs={4}>
                            <i className="fas fa-briefcase-medical"></i>
                            <div>
                                <p>IMMEDIATE SERVICE</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col  xs={4}>
                            <i className="fas fa-heartbeat"></i>
                            <div>
                                <p>IMMEDIATE SERVICE</p>
                            </div>
                        </Col>
                        <Col  xs={4}>
                            <i className="fas fa-stethoscope"></i>
                            <div>
                                <p>IMMEDIATE SERVICE</p>
                            </div>
                        </Col>
                        <Col  xs={4}>
                            <i className="fas fa-procedures"></i>
                            <div>
                                <p>IMMEDIATE SERVICE</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}