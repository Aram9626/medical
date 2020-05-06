import React,{Component} from 'react';
import './footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Footer extends Component{
    render() {
        return(
            <div className='footer'>
                <br/>
                <div className='hr'>
                    <hr/>
                </div>
                <br/>
                <div className='foot'>

                    <Container>
                        <a href='/'>
                        <img src={window.location.origin+'/'+'logo.png'} className='img' />
                        </a>
                        <Row>
                            <Col sm>
                                <div className='footTitle'>
                                    Neighborhood Care Hospice is reachable 24/7 for your care needs. Our staff is ready to respond whenever needed to a medical or emotional emergency.
                                    We are dedicated to providing information, education and to family members throughout the process. </div>
                            </Col>
                            <Col sm>
                                <div className='footNav'>
                                    <Container>
                                        <Row>
                                            <Col sm={4} className='bottom'>
                                                <a href="/about-us" className='linkFooter' >
                                                    About us
                                                </a>
                                            </Col>
                                            <Col sm={8} className='bottom'>
                                                <a href="/eligibility-indicators" className='linkFooter'>
                                                Eligibility indicators
                                                </a>
                                            </Col>
                                            <Col sm={4} className='bottom'>
                                                <a href="/services" className='linkFooter'>
                                                    Services
                                                </a>
                                            </Col>
                                            <Col sm={8} className='bottom'>
                                                <a href="/contact-us" className='linkFooter'>
                                                    Contact us
                                                </a>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container className='footContact'>
                        <Row>
                            <Col sm={10}>
                                <Container className='contactFooter'>
                                    <Row>
                                        <Col md="auto" xl={3} className='call'>
                                            <div>
                                                <a href='tel:+8189379977'>
                                                    <i className="fas fa-phone fa-flip-horizontal"></i><span className='entTitle'>(818) 937-9977</span>
                                                </a>
                                            </div>
                                        </Col>
                                        <Col md="auto" xl={3} className='em'>
                                            <div>
                                                <a href='mailto:Info@neighborhoodch.com'>
                                                    <i className="fas fa-envelope"></i><span className='entTitle'>Info@neighborhoodch.com</span>
                                                </a>
                                            </div>
                                        </Col>
                                        <Col md="auto" xl={6} className='ad'>
                                            <div>
                                                <a target="_blank"  href={"https://www.google.com/maps/place/17418+Chatsworth+St,+Granada+Hills,+CA+91344,+%D5%84%D5%AB%D5%A1%D6%81%D5%B5%D5%A1%D5%AC+%D5%86%D5%A1%D5%B0%D5%A1%D5%B6%D5%A3%D5%B6%D5%A5%D6%80/@34.2645171,-118.5160253,17z/data=!3m1!4b1!4m5!3m4!1s0x80c29aea4169214d:0x30da89ac5af8d035!8m2!3d34.2645127!4d-118.5138366"}>
                                                    <i className="fas fa-map-marker-alt"></i><span className='entTitle'> 17418 Chatsworth St. Granada Hills, Los Angeles, CA, 91205</span>
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col sm={2}>
                                <a target="_blank" href='https://www.facebook.com/' rel="noopener noreferrer">
                                    <i  className="fab fa-facebook-square" ></i>
                                </a>
                                <a target="_blank" href='https://twitter.com/' rel="noopener noreferrer">
                                    <i  className="fab fa-twitter-square"></i>
                                </a>
                                <a target="_blank" href='https://www.linkedin.com/' rel="noopener noreferrer">
                                    <i  className="fab fa-linkedin"></i>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                    <hr/>
                    <div className='end entTitle'>Neighborhood Care Hospice { new Date().getFullYear() } ©. All rights reserved. <a target="_blank" rel="noopener noreferrer" href={'http://ferrosia.com/'}>Developed by Ferrosia</a> </div>
                </div>
            </div>
        )
    }
}