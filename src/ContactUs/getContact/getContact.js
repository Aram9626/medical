import React,{Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import './getContact.css'
import emailjs from 'emailjs-com';
import ReactNotification from 'react-notifications-component'
import {store} from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

const normalizeInput = (value, previousValue) => {
    if (!value) return value;
    const currentValue = value.replace(/[^\d]/g, '');
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
        if (cvLength < 4) return currentValue;
        if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
        return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
    }
};

export default class GetContact extends Component{
    state={
      name:'',
      email:'',
      phone:'',
      message:'',
    };
    handleChange=(e)=>{
       this.setState({[e.target.name]:e.target.value})
    };
    handleSubmit = async (e)=> {
        e.preventDefault();
       await this.sendFeedback( {message_html: this.state.message,phone_number:this.state.phone, from_name: this.state.name, reply_to: this.state.email});
       this.setState({name:'',email:'',message:'',phone:'' })
    };

    sendFeedback= ( variables)=> {
        emailjs.send('gmail', 'hospice_template_hj6d', variables,'user_w33TkeXlC0IvbgwTFCBfM')
            .then(res => {
            console.log('Email successfully sent!');
                store.addNotification({
                    title: "send succesfuly",
                    message: "thank you",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 1000,
                        onScreen: true
                    }
                });
            })
            .catch(err => {
                console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
                store.addNotification({
                    title: "Error",
                    message: "try again",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 1000,
                        onScreen: true
                    }
                });
            })
    };
    handleChangeInp({ target: { value } }) {
        this.setState(prevState=> ({ phone: normalizeInput(value, prevState.phone) }));
    };
    render() {
        return(
            <div className='getContact'>
                <div className='hr'>
                    <hr/>
                </div>
                <br/>
                <Container >
                    <h1>GET IN TOUCH WITH US</h1>
                    <ReactNotification />
                    <Row>
                        <Col sm>
                                <form className='getInput' onSubmit={e=>this.handleSubmit(e)}>
                                    <input type='text' name='name' placeholder='Name' className='inp'
                                           value={this.state.name} required
                                           onChange={e=>this.handleChange(e)} />
                                    <br/>
                                    <input type="email" name="email" placeholder='E-mail' className='inp'
                                           value={this.state.email} required
                                           onChange={e=>this.handleChange(e)} />
                                    <br/>
                                    <input
                                        className="inp" type="text" name="phone" placeholder="Phone Number"
                                        value={this.state.phone} required
                                        onChange={(e)=>this.handleChangeInp(e)}
                                    />
                                    <br/>
                                    <input type='text' name='message' placeholder='Your message' className='inp'
                                           value={this.state.message} required
                                           onChange={e=>this.handleChange(e)} />
                                    <br/>
                                    <Button variant="info" type="submit">SEND</Button>

                                </form>
                        </Col>
                        <Col sm><img  src={"/images/512.png"}/></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}