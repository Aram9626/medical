import React,{Component} from 'react';
import './comp.css'
import Col3 from "./col3";

export default class Comp extends Component{
    render() {
        return(
            <div className='comp comp6'>
                <br/>
                <div className='hr'>
                    <hr/>
                </div>
                <Col3>
                    <h4 className='span comp6Title'>HOW DOES NEIGHBORHOOD CARE HOSPICE WORK?</h4>
                </Col3>
            </div>
        )
    }
}