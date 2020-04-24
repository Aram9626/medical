import React,{Component} from 'react';
import { Link } from 'react-router-dom'
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
                        <img src={window.location.origin+'/'+'logo.png'} className='img' />
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
                                            <Col xs={4}>
                                                <a href="/AboutUs" className='linkFooter' >
                                                    About us
                                                </a>
                                            </Col>
                                            <Col xs={8}>
                                                <a href="/EligibilityIndicators" className='linkFooter'>
                                                Eligibility indicators
                                                </a>
                                            </Col>
                                            <Col xs={4} className='bottom'>
                                                <a href="/Services" className='linkFooter'>
                                                    Services
                                                </a>
                                            </Col>
                                            <Col xs={8} className='bottom'>
                                                <a href="/ContactUs" className='linkFooter'>
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
                                                <a href='tel:+18186612588'>
                                                    <i className="fas fa-phone"></i><span className='entTitle'>(818) 661-2588</span>
                                                </a>
                                            </div>
                                        </Col>
                                        <Col md="auto" className='em'>
                                            <div>
                                                <a href='mailto:info@hospicevalley.com'>
                                                    <i className="fas fa-envelope"></i><span className='entTitle'>info@hospicevalley.com</span>
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
                                <a target="_blank" href='https://www.facebook.com/'>
                                    <i  className="fab fa-facebook-square" ></i>
                                </a>
                                <a target="_blank" href='https://twitter.com/'>
                                    <i  className="fab fa-twitter-square"></i>
                                </a>
                                <a target="_blank" href='https://www.linkedin.com/'>
                                    <i  className="fab fa-linkedin"></i>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                    <hr/>
                    <div className='end entTitle'>CopyRight  { new Date().getFullYear() }</div>
                </div>
            </div>
        )
    }
}