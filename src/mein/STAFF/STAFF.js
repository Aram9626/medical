import React,{Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import './STAFF.css';

export default class STAFF extends Component{
    render() {
        return(
            <div className='staff comp'>
                <br/>
                <div className='hr'>
                    <hr/>
                </div>
                <br/>
                <br/>

                <Container>
                    <h4 className='span STAFFTitle'>STAFF</h4>
                    <Row>
                        <Col  sm={4} >
                            <Container>
                                <Row className='rowSTAFF'>
                                    <Col ><img  src={'images/download.jpg'} /></Col>
                                    <Col >
                                        <div>
                                            <p>HARRY MILLER</p>
                                            <div>
                                                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                                            </div>
                                            <i className="fas fa-phone"></i><span>+777 00 123 456</span>
                                            <br/>
                                            <i className="fas fa-envelope"></i><span>example@gmail.com</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col sm={4}>
                            <Container>
                                <Row className='rowSTAFF'>
                                    <Col ><img  src={'images/download.jpg'} /></Col>
                                    <Col >
                                        <div>
                                            <p>HELEN FINE</p>
                                            <div>
                                                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                                            </div>
                                            <i className="fas fa-phone"></i><span>+777 00 123 456</span>
                                            <br/>
                                            <i className="fas fa-envelope"></i><span>example@gmail.com</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col  sm={4}>
                            <Container>
                                <Row className='rowSTAFF'>
                                    <Col ><img  src={'images/download.jpg'} /></Col>
                                    <Col >
                                        <div>
                                            <p>MARRY JACKSON</p>
                                            <div>
                                                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                                            </div>
                                            <i className="fas fa-phone"></i><span>+777 00 123 456</span>
                                            <br/>
                                            <i className="fas fa-envelope"></i><span>example@gmail.com</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}