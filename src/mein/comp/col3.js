import React,{Component} from "react";
import Container from 'react-bootstrap/Container';
import RoW from "./RoW";

export default class Col3 extends Component{
    render() {
        return(
            <Container className='coltitle col6'>
                {this.props.children}
                <RoW img={"/images/124.png"} h3={'Finding Hospice Care'} >
                    <div>
                        <small>Neighborhood Care Hospice recognizes that the final stages of live come with a myriad of circumstances, challenges, emotional upheavals and many questions.
                            A terminal prognosis puts the family into an emotional tailspin, looking for answers, for hope and reassurance. This phase of life also requires a lot of planning.
                            A medical prognosis may set a time parameter within which to get family business done and out of the way, but once this is out of the way, families will have the time to share qualitative time and prepare for the final transition.
                        </small>
                    </div>
                </RoW>
                <RoW img={"/images/122.png"} className={'revers colRevers'}>
                    <div>
                        <small>Although every terminal illness is different, even a minute changes may signal finality.
                            It is at these times that we have a clear obligation to contact family members of the loved one in an immediate and loving way.
                        </small>
                    </div>
                </RoW>
                <RoW img={"/images/125.png"}>
                    <div>
                        <small>The pathos of a facility is just as important as the qualifications of medical staff and details of programs offered.
                            Care may vary by the venue in which it is provided.
                            Care standards are the same, however, methodology of performing services may vary from in-home, on-site or elsewhere.
                        </small>
                    </div>
                </RoW>
            </Container>
        )
    }
}