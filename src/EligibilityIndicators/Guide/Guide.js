import React,{Component} from 'react'
import './Guide.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default class Guide extends Component{
    state={
        name:'',
        email:'',
        code:'',
        box1:false,
        box2:false
    };
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    };
    boxChange=(e)=>{
        this.setState({[e.target.name]:!this.state[e.target.name]})
    };
    handleSubmit =(e)=> {
        e.preventDefault();
        console.log(this.state);
        this.setState({name:'',email:'',code:'',box1:false,box2:false})
    };
    render() {
        return(
            <div className='Guide'>
                <br/>
                <hr/>
                <br/>
                <br/>
                <Container>
                    <h1>WHEN IS IT TIME TO CALL HOSPICE? DOWNLOAD A FREE GUIDE NOW</h1>
                    <Row className="justify-content-md-center">
                        <Col md="auto" className='guideForm'>
                            <form className='getInput'  onSubmit={e=>this.handleSubmit(e)}>
                                <input type='text' name='name' placeholder='Name' className='inp' value={this.state.name}
                                       onChange={e=>this.handleChange(e)}/>
                                <br/>
                                <input type="email" name="email" placeholder='E-mail' className='inp' value={this.state.email}
                                       onChange={e=>this.handleChange(e)}/>
                                <br/>
                                <input type='text' name='code' placeholder='Zip code' className='inp' value={this.state.code}
                                       onChange={e=>this.handleChange(e)}/>
                                <br/>
                                <label className='checkbox1'>
                                    <input type='checkbox' name='box1' checked={this.state.box1===true}
                                           onChange={e=>this.boxChange(e)} />
                                      Email me updates on hospice & palliative care.
                                </label>
                                <label>
                                    <input type='checkbox' name='box2' checked={this.state.box2===true}
                                           onChange={e=>this.boxChange(e)}/>
                                      I am a healthcare professional.
                                </label>
                                <Button variant="info" type="submit">SUBMIT</Button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}