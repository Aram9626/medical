import React,{Component} from 'react'
import './Disease.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default class Disease extends Component{
    render() {
        return(
            <div className='Disease'>
                <div className='hr'>
                    <hr/>
                </div>
                <br/>
                <br/>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h1>DISEASE INDICATORS</h1>
                            <Container>
                                <Row>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Cancer</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Heart Failure</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>AIDS</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Coma</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Stroke</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Failure to thrive</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Dementia</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Liver Disease</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Multiple Sclerosis (MS)</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Parkinson’s Disease</span>
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