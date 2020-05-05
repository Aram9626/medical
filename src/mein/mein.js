import React, {Component, Fragment} from 'react';

import Carusel from "./carusel/Carusel";
import './mein.css'
import Services from "./services/services";
import Comp from "./comp/comp";
import Col2 from "./contact/col2";
import Contact from "./contact/contact";

export default class Mein extends Component{
    render() {
        return (
            <div >
                <Carusel
                    img1={"/images/111.png"}
                    img2={"/images/112.png"}
                    title={'BRINGING HEALTH'}
                    subtitle={'TO LIKE FOR THE  WHOLE FAMILY'}
                />
                <div className='meincontact'>
                    <Contact/>
                    <Col2 >
                        <Fragment>
                            <h1>WHO WE ARE</h1>
                            <p>PROVIDING QUALITY HOSPICE CARE SERVICES TO THE COMMUNITY </p>
                            <div>
                                <small>Neighborhood Care Hospice provides an individualized plan of care to meet the physical, emotional and spiritual needs of those dying, and their families.
                                    <br/>
                                    We reflect a spirit and philosophy of caring to ensure comfort, dignity and quality of life for each patient under our care.
                                    <br/>
                                    We respect and respond to the unique differences in families, caregivers, lifestyle values, beliefs, and wishes.
                                </small>
                            </div>
                        </Fragment>
                        <Fragment>
                            <h1>OUR MISSION</h1>
                            <p>24 / 7  PATIENT CARE</p>
                            <div>
                                <small>Our agency provides an individualized program of physical, emotional, and practical care for people in the last phases of a life-limiting illness, with an emphasis on control of pain and other symptoms.
                                    <br/>
                                    We recognize the unique physical, emotional, psychological, and spiritual needs of each person receiving hospice care in their home. We strive to extend the highest level of courtesy and service to patients and their families, caregivers, visitors, and each other.
                                </small>
                            </div>
                        </Fragment>
                    </Col2>
                </div>
                <Services/>
                <Comp/>
            </div>
        )
    }
}