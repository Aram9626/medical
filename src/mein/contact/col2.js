import React,{Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contact.css'

export default class Col2 extends Component{
    render() {
        return(
            <Container className='coltitle'>
                <Row className='colRevers row2'>
                    <Col sm className='colImg'><img  src={window.location.origin+"/images/121.png"}/></Col>
                    <Col sm>
                        <div className='title'>
                            {this.props.children[0]}
                        </div>
                    </Col>

                </Row>
                <Row className='row2'>
                    <Col sm className='colImg'><img  src={window.location.origin+"/images/123.png"}/></Col>
                    <Col sm>
                        <div className='title'>
                            {this.props.children[1]}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}