import React,{Component} from "react";
import Container from 'react-bootstrap/Container';
import RoW from "./RoW";

export default class Col3 extends Component{
    render() {
        return(
            <Container className='coltitle col6'>
                {this.props.children}
                <RoW img={"/images/123.jpg"} />
                <RoW img={"/images/124.jpg"} className={'revers colRevers'}/>
                <RoW img={"/images/125.jpg"}/>
            </Container>
        )
    }
}