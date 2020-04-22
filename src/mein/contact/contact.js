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
                    <Col xs={4}><a href='tel:+77700123456'>
                        <i className="fas fa-phone"></i><span>(818) 661-2588</span></a>
                    </Col>
                    <Col xs={4} className='colMail'>
                        <a href='mailto:info@hospicevalley.com'>
                            <i className="fas fa-envelope"></i><span>info@hospicevalley.com</span>
                        </a>
                    </Col>
                    <Col xs={4}><i className="fas fa-map-marker-alt"></i><span>17418 Chatsworth St. Granada Hills Los Angeles, CA, USA</span></Col>
                </Row>
            </Container>
        )
    }
}