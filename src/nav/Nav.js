import React,{Component} from 'react'
import { withRouter } from "react-router";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import './Nav.css'
import Col from "react-bootstrap/Col";

 class NavBar extends Component{
    state={
      searchShow:false
    };

    render() {
        return(
            <div className='Navbar' >
                <Navbar collapseOnSelect expand="lg" bg="link" variant="light">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" activeKey={this.props.location.pathname}>
                            <Nav.Link href="/" >Home</Nav.Link>
                            <Nav.Link href="/AboutUs" >About us</Nav.Link>
                            <Nav.Link href="/Services" >Services</Nav.Link>
                            <Nav.Link href="/EligibilityIndicators" >Eligibility indicators</Nav.Link>
                            <Nav.Link href="/ContactUs" >Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <span className='icons'>
                     <a target="_blank" href='https://www.facebook.com/'>
                         <i  className="fab fa-facebook-square" ></i>
                     </a>
                    <a target="_blank" href='https://twitter.com/'>
                        <i  className="fab fa-twitter-square"></i>
                    </a>
                    <a target="_blank" href='https://www.linkedin.com/'>
                        <i  className="fab fa-linkedin"></i>
                    </a>
                    {this.state.searchShow?<><input className="search" /><i className="sub fas fa-search"></i></>
                        :<i onClick={()=>this.setState({searchShow:true})} className="clk fas fa-search"></i>}
                </span>
            </div>
        )
    }
}
export default withRouter(NavBar)