import React,{Component} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Client.css'

export default class Client extends Component{
    render() {
        return(
            <div className='Client'>
                <br/>
                <hr/>
                <br/>
                {/*<br/>*/}
                <Container>
                    <h1>WHAT OUR CLIENTS SAYS</h1>
                    <Row>
                        <Col  sm >
                            <div>
                                <i className="fas fa-quote-left"></i>
                                <br/>
                                <div className='lorem'>
                                    <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</small>
                                </div>
                                <img className='imgClient' src={'images/221.png'}/>
                                <br/>
                                <p>Jessica Alba</p>
                            </div>
                        </Col>
                        <Col sm>
                            <div>
                                <i className="fas fa-quote-left"></i>
                                <br/>
                                <div className='lorem'>
                                    <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</small>
                                </div>
                                <img className='imgClient' src={'images/222.png'}/>
                                <br/>
                                <p>Harry Miller</p>
                            </div>
                        </Col>
                        <Col  sm>
                            <div>
                                <i className="fas fa-quote-left"></i>
                                <br/>
                                <div className='lorem'>
                                    <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</small>
                                </div>
                                <img className='imgClient' src={'images/223.png'}/>
                                <br/>
                                <p>John Cook</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}