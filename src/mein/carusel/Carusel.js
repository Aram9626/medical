import React,{Component} from 'react';
import './Carusel.css';
// import '../mein.css';

export default class Carusel extends Component{
    render() {
        return(
            <div className='mein'>
                <div className='meinheader'>
                    <div>
                        <img src={window.location.origin+'/'+'component.png'} className='img' />
                    </div>

                </div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={this.props.img1} alt="First slide"/>
                        </div>
                        {this.props.img2?
                            <div className="carousel-item">
                                <img className="d-block w-100" src={this.props.img2} alt="Second slide"/>
                            </div>
                        :null}
                    </div>
                    {this.props.title?
                        <div>
                            <div className="d-none d-md-block carousel-hr">
                                <hr/>
                            </div>
                            <div className="d-none d-md-block carousel-titleHeader">
                                    <hr/>
                                    <span>WE CARE ABOUT YOU</span>
                                <div className='caruselTitle'>
                                    <h3>{this.props.title}</h3>
                                    <p>{this.props.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    :null}

                </div>
            </div>
        )
    }

}