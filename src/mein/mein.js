import React,{Component} from 'react';

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
                    <Col2/>
                </div>
                <Services/>
                <Comp/>
            </div>
        )
    }
}