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
                            <h1>Neighborhood Care Hospice Ideology</h1>
                            <div className='lorem'>
                                Neighborhood Care Hospice provides a high level of care to terminally ill patients with a wide range of diagnosis. We strive in administering comfort and support to individuals who seek compassionate care in their final days of life.
                                <br/>
                                Our hospice care focuses on enhancing the patient's comfort and overall quality of life. The care is provided in patient's home or place of residence.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}