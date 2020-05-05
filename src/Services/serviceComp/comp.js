import React,{Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Comp1.css'

export default class Comp1 extends Component{
    render() {
        return(
            <Container className='coltitle serviceComp'>
                <Row >
                    <Col lg="6"  xs="auto" className='colImg'><img  src={"/images/321.png"}/></Col>
                    <Col sm>
                        <div className='title'>
                            <span>Our services are available 24 hours a day, 7 days a week.</span>
                            <div>
                                Our hospice nurses and physicians offer help in evaluation for hospice and consider pain and symptom control a priority.
                                The Following is the list of our medical staff and how they will be assisting you.
                            </div>
                            <span>Medical Director</span>
                            <div>
                                Our Medical Director leads an interdisciplinary team and develops a plan of care for the patient while providing consultation to physicians and nurses.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <div className='subtit'>
                            <span>Physician</span>
                            <div>
                                Our physician assesses patient needs and symptoms and prescribes treatment while directing the plan of care.
                                Our nursing services consists of an admitting nurse, visiting nurse and triage nurse.
                                They provide continuous care during crisis.
                            </div>
                            <span>Nurses</span>
                            <div>
                                Our nursing services consists of an admitting nurse, visiting nurse and triage nurse.
                                They provide general and in-patient care for symptom control and continuous care during crisis.
                            </div>
                            <span>Admitting Registered Nurse</span>
                            <div>
                                Our admitting registered nurses assess the patient’s and family’s needs and readiness for hospice.
                                In collaboration with hospice medical director and interdisciplinary team, the registered nurses accept the patient into hospice care.
                            </div>
                            <span>Visiting Nurse</span>
                            <div>
                                Our visiting nurses are dedicated licensed registered and vocational nurses that perform follow up visits for our routine care patients.
                                They follow the plan of care established by our interdisciplinary team under the supervision of their case manager.
                            </div>
                            <span>Triage Nurse</span>
                            <div>
                                Our triage nurses are board certified registered nurses taking phone calls from patients or their families and caregivers after hours, weekends and holidays.
                            </div>
                            <div>
                                Our counseling team provides bereavement support to patients and families as well as an opportunity to talk about the emotional impact of the illness.
                            </div>
                            <div>
                                Spiritual support is available through our coordination with churches, synagogues, mosques and community volunteers.
                            </div>
                            <div>
                                Our hospice provides volunteer services. Volunteers can help run errands, write letters, or just be good listeners.
                            </div>
                            <div>
                                United Hearts Hospice provides home health aide for your personal care needs, such as bathing and feeding.
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
