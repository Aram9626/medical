import React,{Component} from 'react'
import './General.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default class General extends Component{
    render() {
        return(
            <div className='General'>
                <div className='hr'>
                    <hr/>
                </div>
                <br/>
                <br/>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h1>GENERAL INDICATORS</h1>
                            <Container>
                                <Row>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Decreased Appetite/ Weight loss and Malnutrition</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Difficulty Swallowing</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Increased hospitalization and worsening symptoms</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Difficult with ADL’s and performance is decreasing</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Not responding well to medications or treatments</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Recurring infections</span>
                                                </Col>
                                            </Row>
                                        </Container>
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