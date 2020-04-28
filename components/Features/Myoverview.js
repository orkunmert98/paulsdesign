import React, { Component } from 'react';




import dashboard1 from '../../images/Landscape.png';
import dashboard2 from '../../images/outdoor.png';
import dashboard3 from '../../images/portrait.png';
import dashboard4 from '../../images/projector.png';
import dashboard5 from '../../images/touch screen.png';
import dashboard6 from '../../images/video wall.png';
import d1 from "../../images/landscape.svg";
import d2 from '../../images/outdoor.svg';
import d3 from '../../images/portrait.svg';
import d4 from '../../images/projector.svg';
import d5 from '../../images/touchscreen.svg';
import d6 from '../../images/video wall.svg';

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
           images:[dashboard1,dashboard2,dashboard3,dashboard4,dashboard5,dashboard6],
            contentImgCur: dashboard1,
        }
    }

    

    render() {




        return (
            <section className="overview-section bg-gray" style={{marginBottom:100}}>
                <div className="container">
                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-content">
                                <h3 className="order-1 mb-4">Display Your Content</h3>
                                <div className="row">
                                  
                                    <div className="col-12 order-1 order-md-2">
                                        <div className="mb-4 order-2 order-md-3"> {/*  className="feature-display-inline">*/}
                                            <div className="row d-flex flex-wrap justify-content-around">
                                                <div onClick={()=>this.setState({ contentImgCur:dashboard1})} className="d-flex flex-column align-items-center p-2">
                                                    <img src={d1} />
                                                    {/* <span>Business</span> */}
                                                </div>
                                                <div onClick={()=>this.setState({ contentImgCur:dashboard2})} className="d-flex flex-column align-items-center p-2">
                                                    <img src={d2}/>
                                                    {/* <span>Online</span> */}
                                                </div>
                                                <div onClick={()=>this.setState({ contentImgCur:dashboard3})} className="d-flex flex-column align-items-center p-2">
                                                    <img src={d3}/>
                                                    {/* <span>Consumer</span> */}
                                                </div>
                                                <div onClick={()=>this.setState({ contentImgCur:dashboard4})} className="d-flex flex-column align-items-center p-2">
                                                    <img src={d4} />
                                                    {/* <span>Business</span> */}
                                                </div>
                                                <div onClick={()=>this.setState({ contentImgCur:dashboard5})} className="d-flex flex-column align-items-center p-2">
                                                    <img src={d5} />
                                                    {/* <span>Online</span> */}
                                                </div>
                                                <div onClick={()=>this.setState({ contentImgCur:dashboard6})} className="d-flex flex-column align-items-center p-2">
                                                    <img src={d6} />
                                                    {/* <span>Consumer</span> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 order-3 order-md-1"><p className="mb-5 order-3 order-md-2">Select a custom resolution or aspect ratio in both portrait or landscape formats. Imagine software works flawlessly with every display from low-res, HD and 4k screens to 8k projectors and beyond.</p></div>
                                    </div>
                                   
                                </div>
                                <div className="text-center text-md-left mt-4">
                                    <button className="btn btn-primary btn-rounded">Learn  more</button>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 overview-img d-none d-md-block">
                            {this.state.images.map((item)=>(

<img src={item} alt="image"  style={{width:this.state.contentImgCur===item?"100%":0}}/>

                            ))}
                            
                               
                            </div>
                        </div>
                    </div>

                </div>

              
            </section>
        );
    }
}

export default Overview;
