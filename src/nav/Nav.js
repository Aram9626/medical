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
                                  <div>
                                      |<i className="fas fa-map-marker-alt"></i><span> 17418 Chatsworth St. Granada Hills, Los Angeles, CA, USA</span>
                                  </div>
                              </Col>
                          </Row>
                     </Container>
                </span>
            </div>
        )
    }
}
export default withRouter(NavBar)