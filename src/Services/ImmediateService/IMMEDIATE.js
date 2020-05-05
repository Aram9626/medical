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
                            <h1>Advantages of Hospice Care</h1>
                            <div className='iconService'>
                                <Container>
                                    <Row>
                                        <Col xs={1} >
                                            <div className='fasdiv'>
                                                <img  src={"service11.png"}/>
                                            </div>
                                        </Col>
                                        <Col  xs={1}>
                                            <div className='fasdiv'>
                                                <img  src={"service13.png"}/>

                                            </div>
                                        </Col>
                                        <Col  xs={1}>
                                            <div className='fasdiv'>
                                                <img  src={"service14.png"}/>
                                            </div>
                                        </Col>
                                        <Col  xs={1}>
                                            <div className='fasdiv'>
                                                <img  src={"service15.png"}/>
                                            </div>
                                        </Col>
                                        <Col  xs={1}>
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
                                                    <span>Hospice care is a cost-effective alternative to high costs associated with hospitals and traditional institutional care.</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Hospice care allows terminally ill patients and their families to remain together in the comfort and dignity of their home.</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Hospice care relies on the combined knowledge and skills of an interdisciplinary team of professionals, including physicians, nurses, home care aides, social workers, counselors, and volunteers.</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Hospice is the preferred choice of health care delivery for the terminally ill and their patients.</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col xs={12}>
                                        <Container className='iconTitles'>
                                            <Row>
                                                <Col xs lg="1"><div></div></Col>
                                                <Col>
                                                    <span>Hospice treats the person, not the disease; focuses on the family, not the individual; and emphasizes the quality of life, not the duration.</span>
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