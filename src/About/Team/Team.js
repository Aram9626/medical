import React,{Component} from 'react'
import './Team.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default class Team extends Component{
    render() {
        return(
            <div className='AboutTeam'>
                <br/>
                <hr/>
                <br/>
                <br/>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h1>GET TO KNOW US</h1>
                            <div className='lorem'>
                                Neighnborhood Hospice Care provides an individualized plan of care to meet the physical, emotional and spiritual needs of those dying, and their families.
                            </div>
                            <div className='lorem'>
                                We reflect a spirit and philosophy of caring to ensure comfort, dignity and quality of life for each patient under our care.
                            </div>
                            <div className='lorem'>
                                We respect and respond to the unique differences in families, caregivers, lifestyle values, beliefs, and wishes.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}