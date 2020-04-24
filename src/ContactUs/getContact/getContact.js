import React,{Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import './getContact.css'
import emailjs from 'emailjs-com';

export default class GetContact extends Component{
    state={
      name:'',
      email:'',
      message:''
    };
    handleChange=(e)=>{
       this.setState({[e.target.name]:e.target.value})
    };
    handleSubmit =(e)=> {
        e.preventDefault();
        this.sendFeedback( {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email});
        this.setState({name:'',email:'',message:''})
    };

    sendFeedback= ( variables)=> {
        emailjs.send('gmail', 'test_template_hj6d', variables,'user_ypCNP8LH2Ii0d7DuUNPx2')
            .then(res => {
            console.log('Email successfully sent!')})
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
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