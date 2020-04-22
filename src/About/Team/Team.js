import React,{Component} from 'react'
import './Team.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default class Team extends Component{
    render() {
        return(
            <div className='AboutTeam'>
                <br/>
                <hr/>
                <br/>
                <br/>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h1>ABOUT OUR TEAM</h1>
                            <div className='lorem'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}