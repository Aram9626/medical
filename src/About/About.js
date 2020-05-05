import React, {Component, Fragment} from 'react';

import Carusel from "../mein/carusel/Carusel";
import '../mein/mein.css'
import Col2 from "../mein/contact/col2";
import Company from "./Company/Company";
import Team from "./Team/Team";
import Contact from "../mein/contact/contact";


export default class About extends Component{
    render() {
        return (
            <div>
                <Carusel img1={"images/211.png"} title={'ABOUT US'}/>
                <div className='meincontact'>
                    <Contact/>
                    <Company/>
                    <Col2>
                        <Fragment>
                            <h1>Admission Criteria</h1>
                            <div>
                                <small>
                                    Neighborhood Care Hospice Inc. offers services to patients who have a terminal illness where the goal of treatment is pain management and symptom control with a limited life expectancy as diagnosed by the patient’s physician.
                                    Hospice patients do not have to be homebound. Patients, however, must be aware of their condition and reside within the service area.
                                </small>
                            </div>
                        </Fragment>
                        <Fragment>
                            <h1>Coverage</h1>
                            <div>
                                <small>
                                    Financial coverage is available through the Hospice Medicare Benefit and many private insurance companies.
                                    No person shall be denied services based on age, race, national origin, disease, handicap, religion, gender, color, or sexual orientation.
                                    <br/>
                                    <br/>
                                    Pursuant Title VI of the Civil Rights Act of 1964, Section 504 of the Rehabilitation Act of 1973 and the Age Discrimination Act of 1975, and their implementation regulations, our Agency does not discriminate in the provision of services.
                                </small>
                            </div>
                        </Fragment>
                    </Col2>
                </div>
                <Team/>
            </div>
        )
    }
}