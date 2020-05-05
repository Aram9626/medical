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
                            <Col sm={8}>
                                <Container className='contactFooter'>
                                    <Row>
                                        <Col md="auto" className='call'>
                                            <div>
                                                <a href='tel:+8189379977'>
                                                    <i className="fas fa-phone fa-flip-horizontal"></i><span className='entTitle'>(818) 937-9977</span>
                                                </a>
                                            </div>
                                        </Col>
                                        <Col md="auto" className='em'>
                                            <div>
                                                <a href='mailto:Info@neighborhoodch.com'>
                                                    <i className="fas fa-envelope"></i><span className='entTitle'>Info@neighborhoodch.com</span>
                                                </a>
                                            </div>
                                        </Col>
                                        <Col md="auto" className='ad'>
                                            <div>
                                                <i className="fas fa-map-marker-alt"></i><span className='entTitle'> 17418 Chatsworth St. Granada Hills, Los Angeles, CA, USA</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col sm={4}>
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