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
                                    <Col sm={10}><p className='contP'>info@hospicevalley.com</p></Col>
                                </Row>
                            </Container>
                        </a>
                    </Col>
                    <Col xs={4}>
                        <Container>
                            <Row>
                                <Col sm={2} xs={4} className='Col-ic' ><i className="fas fa-map-marker-alt"></i></Col>
                                <Col sm={10} className='icMap'><p className='contP'>1447 E. Colorado St Glendale, Ca 91205</p></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}