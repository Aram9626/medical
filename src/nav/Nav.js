import React,{Component} from 'react'
import { withRouter } from "react-router";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import './Nav.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

 class NavBar extends Component{
    render() {
        return(
            <div className='Navbar' >
                <Navbar collapseOnSelect expand="lg" bg="link" variant="light">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" activeKey={this.props.location.pathname}>
                            <Nav.Link href="/" >Home</Nav.Link>
                            <Nav.Link href="/about-us" >About us</Nav.Link>
                            <Nav.Link href="/services" >Services</Nav.Link>
                            <Nav.Link href="/eligibility-indicators" >Eligibility indicators</Nav.Link>
                            <Nav.Link href="/contact-us" >Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <span className='icons'>
                     <Container >
                          <Row>
                              <Col md="auto" >
                                  <div>
                                      <i className="fas fa-phone fa-flip-horizontal"></i><span>(818) 937-9977</span>
                                  </div>
                              </Col>

                              <Col md="auto">
                                  {/*<a target="_blank"  href={"https://www.google.com/maps/place/17418+Chatsworth+St,+Granada+Hills,+CA+91344,+%D5%84%D5%AB%D5%A1%D6%81%D5%B5%D5%A1%D5%AC+%D5%86%D5%A1%D5%B0%D5%A1%D5%B6%D5%A3%D5%B6%D5%A5%D6%80/@34.2645171,-118.5160253,17z/data=!3m1!4b1!4m5!3m4!1s0x80c29aea4169214d:0x30da89ac5af8d035!8m2!3d34.2645127!4d-118.5138366"}>*/}
                                  <div>|
                                      <a target="_blank"  href={"https://www.google.com/maps/place/17418+Chatsworth+St,+Granada+Hills,+CA+91344,+%D5%84%D5%AB%D5%A1%D6%81%D5%B5%D5%A1%D5%AC+%D5%86%D5%A1%D5%B0%D5%A1%D5%B6%D5%A3%D5%B6%D5%A5%D6%80/@34.2645171,-118.5160253,17z/data=!3m1!4b1!4m5!3m4!1s0x80c29aea4169214d:0x30da89ac5af8d035!8m2!3d34.2645127!4d-118.5138366"}>
                                            <i className="fas fa-map-marker-alt"></i><span> 17418 Chatsworth St. Granada Hills, Los Angeles, CA, USA</span>
                                       </a>
                                  </div>
                                  {/*</a>*/}
                              </Col>
                          </Row>
                     </Container>
                </span>
            </div>
        )
    }
}
export default withRouter(NavBar)