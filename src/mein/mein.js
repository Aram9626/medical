import React,{Component} from 'react';

import Carusel from "./carusel/Carusel";
import './mein.css'
import Services from "./services/services";
import STAFF from "./STAFF/STAFF";
import Comp from "./comp/comp";
import Col2 from "./contact/col2";
import Contact from "./contact/contact";

export default class Mein extends Component{
    render() {
        return (
            <div >
                <Carusel
                    img1={"554.webp"}
                    img2={"557.webp"}
                    title={'BRINGING HEALTH'}
                    subtitle={'TO LIKE FOR THE  WHOLE FAMILY'}
                />
                <div className='meincontact'>
                    <Contact/>
                    <Col2>
                        <a href='/AboutUs'>
                            <span>see more</span>
                        </a>
                    </Col2>
                </div>
                <Services/>
                <STAFF/>
                <Comp/>
            </div>
        )
    }
}