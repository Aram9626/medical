import React,{Component} from 'react';
import Carusel from "../mein/carusel/Carusel";
import '../mein/contact/contact.css'
import GetContact from "./getContact/getContact";
import Contact from "../mein/contact/contact";

export default class ContactUs extends Component{
    render() {
        return (
            <div>
                <Carusel img1={"images/512.jpeg"} />
                <div className='meincontact'>
                    <Contact/>
                </div>
                <GetContact/>
            </div>
        )
    }
}