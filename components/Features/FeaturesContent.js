import React, { Component } from 'react';
import {Collapse} from 'react-collapse';

import dashboard1 from '../../images/features/layout/banner.png';
import dashboard2 from '../../images/features/layout/dash2.png';
import dashboard3 from '../../images/features/layout/dash3.png';
import dashboard4 from '../../images/features/layout/Hardware.png';
import dashboard5 from '../../images/features/layout/widgets.png';
import dashboard6 from '../../images/features/layout/banner.png';

import layout1 from '../../images/features/layout/1-add-region.png';
import layout2 from '../../images/features/layout/2-upload-content.png';
import layout3 from '../../images/features/layout/3-schedule.png';
import layout4 from '../../images/features/layout/4-Preview.png';
import layout5 from '../../images/features/layout/tv.png';

import {features_list} from '../../shared/constant';
import { Row ,Col} from 'react-bootstrap';
import Mutlicard from "./Multicard"

class FeaturesContent extends Component {
    constructor(props) {
        super(props);


            const title1 = "Organize everything you need to complete";
            const title2 = "(Second)Organize everything you need to complete2";
            const title3 = "(Third)Organize everything you need to complete3";
            const title4 = "(Fourth)Organize everything you need to complete4";
            const title5 = "(Fifth)Organize everything you need to complete5";

            const text1 = "Keep your prioities straight and your goals in sight. Customize dashboards so you only see what you want to see.";
            const text2 = "(Second)Keep your prioities straight and your goals in sight. Customize dashboards so you only see what you want to see.";
            const text3 = "(Thrid)Keep your prioities straight and your goals in sight. Customize dashboards so you only see what you want to see.";
            const text4 = "(Fourth)Keep your prioities straight and your goals in sight. Customize dashboards so you only see what you want to see.";
            const text5 = "(Fifth)Keep your prioities straight and your goals in sight. Customize dashboards so you only see what you want to see.";
        this.state = {
            // for image change when click
            images: [dashboard1, dashboard2, dashboard3, dashboard4, dashboard5, dashboard6],
            title: [title1, title2, title3, title4, title5],
            texts: [text1, text2, text3, text4, text5],
            imgCur: 0,

            layoutImg: [layout1, layout2, layout3, layout4, layout5],
            layoutImgCur: 1,

            // for load more button
            //all_features: [],     <= data is used on top
            features_array_to_show: [],
            
            features_show_row_count: 3,
            items_in_a_row: 4,
            load_more_disable: false,
            isOpen1: true,
            isOpen2: false,
            isOpen3: false,
            isOpen4: false,
        }
    }


    componentDidMount() {
        this.setState({features_array_to_show: features_list.slice(0, this.state.features_show_row_count * this.state.items_in_a_row)});
    }

    // for image change when click
    onDashboardHandle(e){
        this.setState({imgCur: e});
    }

    onLayoutHandle(e){
        this.setState({layoutImgCur: e});
        switch(e){
            case 0:
                this.setState({isOpen1: !this.state.isOpen1});
                break;
            case 1:
                this.setState({isOpen2: !this.state.isOpen2});
                break;
            case 2:
                this.setState({isOpen3: !this.state.isOpen3});
                break;
            case 3:
                this.setState({isOpen4: !this.state.isOpen4});
                break;
        }
    }

    // for load more button
    loadMoreFeatures() {
        if ( this.state.features_show_row_count < features_list.length / this.state.items_in_a_row )
        {
            this.state.features_show_row_count = this.state.features_show_row_count + 1;
            this.setState({features_array_to_show: features_list.slice(0, this.state.features_show_row_count * this.state.items_in_a_row)});
        }
        else {
            this.state.load_more_disable = true;
        }
    }

    render() {
        return (
            <section className="features-area saas-features " >
                
                
                <div className="features-inner-area ptb-100 pt-0">
              
                    <div style={{backgroundColor:"rgb(245,247,252)",paddingTop:50,paddingBottom:50}}>
                    <div className="section-title" >
                        <h2 style={{color:"black",fontSize:"1.5rem"}}>Creating your own custom layout with no skills necessary</h2>
                        <div className="bar"></div>
                      
                    </div>
                    <div  className="container">
                    <Row>
                    <Col  lg={7} md={7} >     
                    <div className="container">
                        <ul className="nav-dashboard" style={{marginBottom:40}}>


                            <li onClick={e => this.onDashboardHandle(0)} style={{"cursor": "pointer"}}>
                        
                                <span>Create</span>
                            </li>
                            <li onClick={e => this.onDashboardHandle(1)} style={{"cursor": "pointer"}}>
                              
                                <span>plan</span>
                            </li>
                            <li onClick={e => this.onDashboardHandle(2)} style={{"cursor": "pointer"}}>
                              
                                <span>Collraborate</span>
                            </li>
                            <li onClick={e => this.onDashboardHandle(3)} style={{"cursor": "pointer"}}>
                              
                                <span>Report</span>
                            </li>
                            <li onClick={e => this.onDashboardHandle(4)} style={{"cursor": "pointer"}}>
                               
                                <span>Coustomize</span>
                            </li>
     
                        </ul>
     
     
                    </div>
                   
                 
                                <h3 style={{color:"black",fontSize:"2rem",fontWeight:1000,marginBottom:30}}>{this.state.title[this.state.imgCur]}</h3>
                                <p style={{color:"black"}}>{this.state.texts[this.state.imgCur]}</p>
                                <a href="">See all features</a>
                        
                    </Col>
                    <Col lg={5} md={5}>
                    
                  
{

this.state.images.map((item,index)=>(

    <img src={item} alt="image"  style={{height:index==this.state.imgCur?"100%":"50%"}}/>

))

}

                                   
                           
                    </Col>
                </Row>
                </div>
                </div>
                </div>
               
             
               
                <div className="features-inner-area">
                    <div className="section-title">
                        <h2 style={{color:"black"}}>Custom Features</h2>
                        <div className="bar"></div>
                        <p className="mb-5 mb-lg-0">Only Takes 60 seconds to create your own layout</p>
                    </div>
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="features-inner-content">
                                    <div className="features-item" onClick={e => this.onLayoutHandle(0)} style={{"cursor": "pointer"}}>
                                        <h3>Design your layout</h3>
                                        <Collapse isOpened={this.state.isOpen1}>
                                            <p>Select a template or create your own screen layout</p>
                                        </Collapse>
                                    </div>
                                    <div>
                                    
                                    </div>
                                    <div className="features-item" onClick={e => this.onLayoutHandle(1)} style={{"cursor": "pointer"}}>
                                        <h3>Upload your content</h3>
                                        <Collapse isOpened={this.state.isOpen2}>
                                            <p>Manage Images, videos, Pdf’s, PowerPoint files and even mp3’s</p>
                                        </Collapse>
                                    </div>

                                    <div className="features-item" onClick={e => this.onLayoutHandle(2)} style={{"cursor": "pointer"}}>
                                        <h3>Schedule your content</h3>
                                        <Collapse isOpened={this.state.isOpen3}>   
                                            <p>Select a certain day, time of day or schedule in advance.</p>
                                        </Collapse>
                                    </div>

                                    <div className="features-item" onClick={e => this.onLayoutHandle(3)} style={{"cursor": "pointer"}}>
                                        <h3>Preview your layout</h3>
                                        <Collapse isOpened={this.state.isOpen4}>   
                                        <p>See what goes live before anyone else.</p>
                                        </Collapse>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 text-area">
                                <div className="features-image">
                                    <img src={this.state.layoutImg[this.state.layoutImgCur]} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               <Mutlicard from={0} to={2}></Mutlicard>
                <div className="iceborg-content">
                    <div className="container">
                        <div className="row">
                            <div className="offset-lg-2 col-lg-8">
                                <h2 className="text-center mb-4">That's just the tip of the iceberg</h2>
                                <p className="text-center mb-4">There are too many great features you'll love to list them all here, but you can check out more of the things that make Wufoo the best form builder on the web by visiting our plans and pricing page</p>
                                <div className="text-center">
                                    <button className="btn btn-primary"><span>See more features</span></button>
                                </div>
                            </div>
                        </div>
                 
                    </div>
                
                </div>
                 
         
          
              
            </section>

        );
    }
}

export default FeaturesContent;