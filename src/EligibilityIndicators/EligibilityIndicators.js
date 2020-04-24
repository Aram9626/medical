import React,{Component} from 'react';
import Carusel from "../mein/carusel/Carusel";
import '../mein/contact/contact.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import './EI.css'
import General from "./General/General";
import Disease from "./Disease/Disease";
import Guide from "./Guide/Guide";
import Contact from "../mein/contact/contact";


export default class EligibilityIndicators extends Component{
    render() {
        return (
            <div>
                <Carusel img1={"images/411.png"} title={'ELIGIBILITY INDICATORS'} />
                <div className='meincontact'>
                    <Contact/>
                    <div className='contTitle'>
                        If your doctor has determined that a patient has 6 months or less to live, they are able to qualify for hospice care at home.
                    </div>
                </div>
                <div className='cardiogram'>
                    <img src={'cardiogram.png'}/>
                </div>
                <General/>
                <Disease/>
                <div className='cardiogram'>
                    <img src={'cardiogram.png'}/>
                </div>
                <div className='col84'>
                    <Container >
                        <Row>
                            <Col sm={8}>
                                <div className='contTitle'>
                                    If you have any questions or concerns if you or your family is eligible.
                                </div>
                            </Col>
                            <Col md="auto">
                                <a href='tel:+77700123456'>
                                    <Button variant="info" className='CallBTN' >CALL US: (818) 818-0000</Button>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Guide/>
            </div>
        )
    }
}