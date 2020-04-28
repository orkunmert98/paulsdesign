import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Grid, Button } from '@material-ui/core';
import {img} from "react-icons/fa"
import Logo1 from "../../images/customisable.svg"
import Logo2 from "../../images/easy to navigate.svg"
import Logo3 from "../../images/secure and reliable.svg"

 export default function Card(){


    return(
        <div className="container" style={{marginBottom:150}}>

       <Grid container >
<Grid md={4}lg={4} sm={6} xs={6} className="flexcontainer cardhover flexcontainerrelative cardm"  style={{justifyContent:"start"}}>
<div className="flexcontaineralign" >
<img src={Logo1} alt="" className="flexcontaineralignimage " ></img>
</div>
<div>
    <div style={{marginTop:30,marginBottom:20}}>

    <bold style={{color:"black",fontWeight:1000}} className="cardtitlehover">Easy to Navigate
</bold>
    </div>

<p  style={{color:"black"}} className="hoverp">A feature in itself, Imagine was built for the end users in mind with online chat support available
</p>

<Button variant="contained" style={{backgroundColor:"#FB6520",color:"white"}} className="buttonab">
                         Overview
                         </Button>

</div>



</Grid>
<Grid md={4}lg={4} sm={6} xs={6} className="flexcontainer cardhover flexcontainerrelative cardm" style={{justifyContent:"start"}} >
<div className="flexcontaineralign" >
<img src={Logo2} alt="" className="flexcontaineralignimage"alignimage ></img>
</div>
<div>
    <div style={{marginTop:30,marginBottom:20}}>

    <bold style={{color:"black",fontWeight:1000}} className="cardtitlehover">Secure & reliable
</bold>
    </div>

<p  style={{color:"black"}} className="hoverp">Hosted on secure servers with 99.9% daily uptime and secured with 2 password authentication.
</p>
<Button variant="contained" style={{backgroundColor:"#FB6520",color:"white"}} className="buttonab">
                         LG setup
                         </Button>
</div>



</Grid>
<Grid md={4}lg={4} sm={6} xs={6} className="flexcontainer cardhover flexcontainerrelative flexcontainerrelative cardm"  style={{justifyContent:"start"}}>
   <div className="flexcontaineralign">
<img src={Logo3} alt="" className="flexcontaineralignimage"></img>
</div>
<div>
    <div style={{marginTop:30,marginBottom:20}}>

    <bold style={{color:"black",fontWeight:1000}} className="cardtitlehover">Customisable</bold>
    </div>

<p  style={{color:"black"}} className="hoverp">Zero limitations to the Imagine capabilities with custom features tailored to specific needs.
</p>
<Button variant="contained" style={{backgroundColor:"#FB6520",color:"white"}} className="buttonab">
                      Shop now
                         </Button>
</div>



</Grid>

       </Grid></div>
    )
 }

