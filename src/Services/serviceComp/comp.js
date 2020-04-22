import React,{Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Comp1.css'

export default class Comp1 extends Component{
    render() {
        return(
            <Container className='coltitle serviceComp'>
                <Row xs={1} md={2}>
                    <Col  md="auto" className='colImg'><img  src={"/images/313.jpg"}/></Col>
                    <Col sm>
                        <div className='title'>
                            <h1>WE CARE ABOUT YOU</h1>
                            <p>GIVING YOU QUALITY OF LIFE IN THE FINAL DAYS FOR  YOUR LOVED ONES.</p>
                            <div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <div className='subtit'>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.
                                    Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa.
                                    Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque.</p>
                                <p> Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc.
                                    Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi.
                                    Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.
                                    Sed sed lacinia lectus. Duis sit amet sodales felis.
                                    Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.
                                    Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisitiendum.
                                    Because he will ab hold, uniess but through concer, and also of those who resist.</p>
                                <p>Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.
                                    Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc.Nullam arcu. Aliquam consequat. Curabitur augue lorem </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
