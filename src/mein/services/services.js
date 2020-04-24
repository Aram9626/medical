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
                            <div>
                                <img  src={"service1.png"}/>
                            </div>
                            <div>
                                <p>Available 24/7</p>
                            </div>
                        </Col>
                        <Col  xs={4}>
                            <div className='service2'>
                                <img  src={"service2.png"}/>
                            </div>
                            <div>
                                <p>Nurses & Physicians</p>
                            </div>
                        </Col>
                        <Col  xs={4}>
                            <div className='service3'>
                                <img  src={"service3.png"}/>
                            </div>
                            <div>
                                <p>Our Counseling Team</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col  xs={4}>
                            <div className='service4'>
                                <img  src={"service4.png"}/>
                            </div>
                            <div>
                                <p>Patient & Family</p>
                            </div>
                        </Col>
                        <Col  xs={4}>
                            <div>
                                <img  src={"service5.png"}/>
                            </div>
                            <div>
                                <p>Volunteer Services</p>
                            </div>
                        </Col>
                        <Col  xs={4}>
                            <div className='service6'>
                                <img  src={"service6.png"}/>
                            </div>
                            <div>
                                <p>Personal Care Needs</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}