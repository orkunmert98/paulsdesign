import React, { Component } from 'react';

import {Row,Col} from "react-bootstrap"
import {Button} from "@material-ui/core"

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
                            <div className="col-lg-7 col-md-7 overview-content">
                                <h3 className="order-1 mb-4">Content that will display perfectly on all screen sizes</h3>
                                <div className="row">
                                  
                                    <div className="col-12 ">
                                       {/*  className="feature-display-inline">*/}
                                            <Row>
                                        
                                                <Col xs={4} style={{marginTop:10}} onClick={()=>this.setState({ contentImgCur:dashboard1})} >
                                                    <img src={d1} />
                                                    {/* <span>Business</span> */}
                                                </Col>
                                                <Col xs={4} style={{marginTop:10}} onClick={()=>this.setState({ contentImgCur:dashboard2})} >
                                                    <img src={d2}/>
                                                    {/* <span>Online</span> */}
                                                </Col>
                                                <Col xs={4} style={{marginTop:10}} onClick={()=>this.setState({ contentImgCur:dashboard3})} >
                                                    <img src={d3}/>
                                                    {/* <span>Consumer</span> */}
                                                </Col>
                                                <Col xs={4} style={{marginTop:10}} onClick={()=>this.setState({ contentImgCur:dashboard4})} >
                                                    <img src={d4} />
                                                    {/* <span>Business</span> */}
                                                </Col>
                                                <Col xs={4} style={{marginTop:10}} onClick={()=>this.setState({ contentImgCur:dashboard5})} >
                                                    <img src={d5} />
                                                    {/* <span>Online</span> */}
                                                </Col>
                                                <Col xs={4} style={{marginTop:10}} onClick={()=>this.setState({ contentImgCur:dashboard6})} >
                                                    <img src={d6} />
                                                    {/* <span>Consumer</span> */}
                                                </Col>
                                                </Row>
                                        
                                        <div className="col-12 order-3 order-md-1" style={{marginTop:40}}><p className="mb-5 order-3 order-md-2">Select a custom resolution or aspect ratio in both portrait or landscape formats. Imagine software works flawlessly with every display from low-res, HD and 4k screens to 8k projectors and beyond.</p></div>
                                    </div>
                                   
                                </div>
                                <div style={{marginTop:32}}>
                                    
                                    <Button variant="contained"
                                     className="btn  btn-rounded" size="large"
                                    style={{backgroundColor:"#FB6520",color:"white",textTransform:"none",display:"absolute",paddingBottom:10}} className="buttonab">
                      Read more
                         </Button>   
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 overview-img d-none d-md-block">
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
