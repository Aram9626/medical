import React,{Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './contact.css'

export default class Col2 extends Component{
    render() {
        return(
            <Container className='coltitle'>
                <Row className='colRevers row2'>
                    <Col sm className='colImg'><img  src={window.location.origin+"/images/121.jpg"}/></Col>
                    <Col sm>
                        <div className='title'>
                            <h1>WHO WE ARE</h1>
                            <p>GIVING YOU QUALITY OF LIFE IN THE FINAL DAYS FOR  YOUR LOVED ONES.</p>
                            <div>
                                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
                                {this.props.children}
                            </div>
                            <a href='/ContactUs'>
                                <Button variant="info">Contact us</Button>
                            </a>
                        </div>
                    </Col>

                </Row>
                <Row className='row2'>
                    <Col sm className='colImg'><img  src={window.location.origin+"/images/122.jpg"}/></Col>
                    <Col sm>
                        <div className='title'>
                            <h1>WHAT WE DO</h1>
                            <p>GIVING YOU QUALITY OF LIFE IN THE FINAL DAYS FOR  YOUR LOVED ONES.</p>
                            <div>
                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
                                {this.props.children}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}