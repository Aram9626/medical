import React,{Component} from 'react';

import Carusel from "../mein/carusel/Carusel";
import '../mein/mein.css'
import Col2 from "../mein/contact/col2";
import Company from "./Company/Company";
import Team from "./Team/Team";
import Client from "./Client/Client";
import Contact from "../mein/contact/contact";


export default class About extends Component{
    render() {
        return (
            <div>
                <Carusel img1={"images/211.png"} title={'ABOUT US'}/>
                <div className='meincontact'>
                    <Contact/>
                    <Company/>
                    <Col2/>
                </div>
                <Team/>
                <Client/>
            </div>
        )
    }
}