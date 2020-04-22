import React,{Component} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class RoW extends Component{
    render() {
        return(
                <Row className={`${this.props.className?this.props.className:''} row2`} >
                    <Col sm className='colImg'><img  src={window.location.origin+this.props.img}/></Col>
                    <Col sm>
                        <div className='title'>
                            <h3>LOREM IPSUM</h3>
                            <p>BRINGING HEALTH TO LIFE FOR THE WHOLE FAMILY</p>
                            <div>
                                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </small>
                            </div>
                        </div>
                    </Col>
                </Row>
        )
    }
}