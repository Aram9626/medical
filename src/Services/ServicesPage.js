import React,{Component} from 'react';
import Carusel from "../mein/carusel/Carusel";
import Services from '../mein/services/services'
import '../mein/mein.css'
import './ServicesPage.css'
import Comp1 from "./serviceComp/comp";
import ImmediateService from "./ImmediateService/IMMEDIATE";
import Contact from "../mein/contact/contact";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default class ServicesPage extends Component{
    render() {
        return (
            <div>
                <Carusel img1={"images/311.png"}  title={'SERVICES'}/>
                <div className='meincontact'>
                    <Contact/>
                </div>
                <Services/>
                <div className='cardiogram'>
                    <img src={'cardiogram.png'}/>
                </div>
                <Comp1/>
                <ImmediateService/>
                <div className='col84'>
                    <Container >
                        <Row>
                            <Col sm={10} md={8}>
                                <div className='contTitle'>
                                    Let us treat your loved ones like family.
                                </div>
                            </Col>
                            <Col md="auto">
                                <a href='tel:+8189379977'>
                                    <Button variant="info" className='CallBTN' >CALL US: (818) 937-9977</Button>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}