import React,{Component} from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import './IMMEDIATE.css'

export default class ImmediateService extends Component{
    render() {
        return(
            <div className='ImmediateService' >
                <div className='hr'>
                    <hr/>
                </div>
                <br/>
                <br/>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h1>IMMEDIATE SERVICE</h1>
                            <p>GIVING YOU QUALITY OF LIFE IN THE FINAL DAYS FOR YOUR LOVED ONES.</p>
                            <div className='iconService'>
                                <Container>
                                    <Row>
                                        <Col sm>
                                            <div className='fasdiv'>
                                                <img  src={"service11.png"}/>
                                            </div>
                                        </Col>
                                        <Col sm>
                                            <div className='fasdiv'>
                                                <img  src={"service12.png"}/>
                                            </div>
                                        </Col>
                                        <Col sm>
                                            <div className='fasdiv'>
                                                <img  src={"service13.png"}/>

                                            </div>
                                        </Col>
                                        <Col sm>
                                            <div className='fasdiv'>
                                                <img  src={"service14.png"}/>
                                            </div>
                                        </Col>
                                        <Col sm>
                                            <div className='fasdiv'>
                                                <img  src={"service15.png"}/>
                                            </div>
                                        </Col>
                                        <Col sm>
                                            <div className='fasdiv'>
                                                <img  src={"service16.png"}/>
                                            </div>
                                        </Col>
                                        <Col sm>
                                            <div className='fasdiv'>
                                                <img  src={"service17.png"}/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <Container>
                                <Row>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet porttitor venenatis. Nam hendrerit nisi sed sollicitudin .</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin. Nulla aliquet porttitor venenatis.</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Lorem ipsum dolor sit amet, consectetur</span>
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