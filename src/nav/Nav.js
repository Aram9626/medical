import React,{Component} from 'react'
import { withRouter } from "react-router";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import './Nav.css'

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
                     <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/'>
                         <i  className="fab fa-facebook-square" ></i>
                     </a>
                    <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/'>
                        <i  className="fab fa-twitter-square"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/'>
                        <i  className="fab fa-linkedin"></i>
                    </a>
                </span>
            </div>
        )
    }
}
export default withRouter(NavBar)