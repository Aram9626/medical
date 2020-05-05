import React,{Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './contact.css'

export default class Col2 extends Component{
    render() {
        return(
            <Container className='coltitle'>
                <Row className='colRevers row2'>
                    <Col sm className='colImg'><img  src={window.location.origin+"/images/121.png"}/></Col>
                    <Col sm>
                        <div className='title'>
                            <h1>WHO WE ARE</h1>
                            <p>PROVIDING QUALITY HOSPICE CARE SERVICES TO THE COMMUNITY </p>
                            <div>
                                <small>Neighborhood Care Hospice provides an individualized plan of care to meet the physical, emotional and spiritual needs of those dying, and their families.
                                    We reflect a spirit and philosophy of caring to ensure comfort, dignity and quality of life for each patient under our care.
                                    We respect and respond to the unique differences in families, caregivers, lifestyle values, beliefs, and wishes.
                                </small>
                            </div>
                        </div>
                    </Col>

                </Row>
                <Row className='row2'>
                    <Col sm className='colImg'><img  src={window.location.origin+"/images/123.png"}/></Col>
                    <Col sm>
                        <div className='title'>
                            <h1>OUR MISSION</h1>
                            <p>24 / 7  PATIENT CARE</p>
                            <div>
                            <small>Our agency provides an individualized program of physical, emotional, and practical care for people in the last phases of a life-limiting illness, with an emphasis on control of pain and other symptoms.
                                We recognize the unique physical, emotional, psychological, and spiritual needs of each person receiving hospice care in their home. We strive to extend the highest level of courtesy and service to patients and their families, caregivers, visitors, and each other.
                            </small>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}