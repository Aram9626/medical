import React,{Component} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Client.css'

export default class Client extends Component{
    render() {
        return(
            <div className='Client'>
                <br/>
                <hr/>
                <br/>
                <Container>
                    <h1>GET TO KNOW US</h1>
                    <Row>
                        <Col  sm >
                            <div>
                                <i className="fas fa-quote-left"></i>
                                <br/>
                                <div className='lorem'>
                                    <small>Neighnborhood Hospice Care provides an individualized plan of care to meet the physical, emotional and spiritual needs of those dying, and their families.</small>
                                </div>
                            </div>
                        </Col>
                        <Col sm>
                            <div>
                                <i className="fas fa-quote-left"></i>
                                <br/>
                                <div className='lorem'>
                                    <small>We reflect a spirit and philosophy of caring to ensure comfort, dignity and quality of life for each patient under our care.
                                    </small>
                                </div>
                            </div>
                        </Col>
                        <Col  sm>
                            <div>
                                <i className="fas fa-quote-left"></i>
                                <br/>
                                <div className='lorem'>
                                    <small>We respect and respond to the unique differences in families, caregivers, lifestyle values, beliefs, and wishes.</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}