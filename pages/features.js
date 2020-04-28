import React, { Component } from 'react';
import Banner from '../components/Features/Banner';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Our from "../components/Features/Our"
import All from "../components/Features/All"
import FeaturesTop from '../components/Features/FeaturesTop';
import ourimg2 from "../images/our/our1.jpg"
import ourimg1 from "../images/dash2.png"
import FeaturesContent from '../components/Features/FeaturesContent';
import Overview from '../components/Features/Overview';
// import Platform from '../components/Features/Platform';
import Htext from "../components/Features/yazı"
import Bar from "../components/Features/Bar"
import Multi from "../components/Features/Multicard"
import CtaCard from '../components/Saas/CtaCard';
import ClientFeedback from '../components/Saas/ClientFeedback';
import GalleryContent from '../components/Saas/GalleryContent';
import Cards from "../components/Features/Cardsforfetaure"
import Myover from "../components/Features/Myoverview"
class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Bar title={"The Necessities To Your Success"}></Bar>
                <Cards></Cards>
                <Our
                title={"Getting to know the platform"}
                p={"Understanding how it all works and as well as the benefits it brings."}
                header1={"Dashboard"}
                header2={"Player"}
                content1={"A WYSIWYG (What you see is what you get), which accessible from any PC with the role of managing all your content and multiple screens easily and effectively "}
                content2={"Installed onto the hardware and wirelessly linked to the dashboard. The Imagine player restarts on a reboot and continues to play content with or without internet connection. Multiple OS versions available"}
                img={ourimg1}
                img2={ourimg2}
                ></Our>
                <CtaCard />
                <All></All>
                <Myover></Myover>
                 <Our
                    title={"Industry specific features"}
                    p={"Installed onto the hardware and wirelessly linked to the dashboard. The Imagin"}
                    header1={"Queue Caller"}
                    header2={"Overlay"}
                    content1={"A wireless queue caller with customizable messages managed from the dashboard. Implement 1 or 100 different messaging for each button                    "}
                    content2={"Installed onto the hardware (media players or all in one displays). The Imagine player auto starts on PC startup with a customizable screensaver. "}
                    img={ourimg1}
                    img2={ourimg2}
                 
                 
                 ></Our>
             <Htext></Htext>
             <div className="features-area">
             <Multi from={0} to={2}></Multi>
             </div>
                {/* <Platform /> */}
             
                <GalleryContent />
               
                <Footer />
            </React.Fragment>
        );
    }
}

export default Features;
