import React,{Component} from 'react';
import Carusel from "../mein/carusel/Carusel";
import Services from '../mein/services/services'
import '../mein/mein.css'
import './ServicesPage.css'
import Comp1 from "./serviceComp/comp";
import ImmediateService from "./ImmediateService/IMMEDIATE";
import Contact from "../mein/contact/contact";

export default class ServicesPage extends Component{
    render() {
        return (
            <div>
                <Carusel img1={"556.webp"}  title={'SERVICES'}/>
                <div className='meincontact'>
                    <Contact/>
                </div>
                <Services/>
                <div className='cardiogram'>
                    {/*<img src={'/images/rate.png'}/>*/}
                    <hr className='hr1'/>
                </div>
                <Comp1/>
                <ImmediateService/>
            </div>
        )
    }
}