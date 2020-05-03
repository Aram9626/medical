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
                            {this.props.h3?
                                <h3>{this.props.h3}</h3>
                                :null}
                            {this.props.children}
                        </div>
                    </Col>
                </Row>
        )
    }
}