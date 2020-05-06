import React,{Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contact.css'

export default class Contact extends Component{
    render() {
        return(
            <Container className='meincontactRow'>
                <Row >
                    <Col xs={4}><a href='tel:+8189379977'>
                        <Container>
                            <Row>
                                <Col sm={2} xs={4} className='Col-ic'><i className="fas fa-phone fa-flip-horizontal"></i></Col>
                                <Col sm={10}><p className='contP'>(818) 937-9977</p></Col>
                            </Row>
                        </Container>
                    </a>
                    </Col>
                    <Col xs={4} >
                        <a href='mailto:info@hospicevalley.com'>
                            <Container>
                                <Row>
                                    <Col sm={2} xs={4} className='Col-ic'><i className="fas fa-envelope"></i></Col>
                                    <Col sm={10}><p className='contP'>Info@neighborhoodch.com</p></Col>
                                </Row>
                            </Container>
                        </a>
                    </Col>
                    <Col xs={4}>
                        <a target="_blank"  href={"https://www.google.com/maps/place/17418+Chatsworth+St,+Granada+Hills,+CA+91344,+%D5%84%D5%AB%D5%A1%D6%81%D5%B5%D5%A1%D5%AC+%D5%86%D5%A1%D5%B0%D5%A1%D5%B6%D5%A3%D5%B6%D5%A5%D6%80/@34.2645171,-118.5160253,17z/data=!3m1!4b1!4m5!3m4!1s0x80c29aea4169214d:0x30da89ac5af8d035!8m2!3d34.2645127!4d-118.5138366"}>
                        <Container>
                            <Row>
                                <Col sm={2} xs={4} className='Col-ic' ><i className="fas fa-map-marker-alt"></i></Col>
                                <Col sm={10} className='icMap'><p className='contP'>1447 E. Colorado St Glendale, CA</p></Col>
                            </Row>
                        </Container>
                        </a>
                    </Col>
                </Row>
            </Container>
        )
    }
}