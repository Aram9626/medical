import React,{Component} from 'react'
import './Company.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default class Company extends Component{
    render() {
        return(
            <div className='AOC'>
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
                            {/*<h1>Admission Criteria</h1>*/}
                            {/*<div className='lorem'>*/}
                            {/*    Neighborhood Care Hospice Inc. offers services to patients who have a terminal illness where the goal of treatment is pain management and symptom control with a limited life expectancy as diagnosed by the patient’s physician.*/}
                            {/*    Hospice patients do not have to be homebound. Patients, however, must be aware of their condition and reside within the service area.*/}
                            {/*</div>*/}
                            {/*<br/>*/}
                            {/*<h1>Coverage</h1>*/}
                            {/*<div className='lorem'>*/}
                            {/*    Financial coverage is available through the Hospice Medicare Benefit and many private insurance companies.*/}
                            {/*    No person shall be denied services based on age, race, national origin, disease, handicap, religion, gender, color, or sexual orientation.*/}
                            {/*</div>*/}
                            {/*<div className='tit'>*/}
                            {/*    Pursuant Title VI of the Civil Rights Act of 1964, Section 504 of the Rehabilitation Act of 1973 and the Age Discrimination Act of 1975, and their implementation regulations, our Agency does not discriminate in the provision of services.*/}
                            {/*</div>*/}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}