import React from 'react'
import {Grid} from "@material-ui/core"
import img from "../../images/industries/retail (queue management) (1).png"
import {FaSwimmer} from "react-icons/fa"
export default function make() {
    return (
        <div className="container">
           <Grid container >

<Grid item xs={6}>
<img src={img}></img>

</Grid>
<Grid item xs={6} style={{paddingLeft:30}}> 

<h1 style={{color:"black",textAlign:"start",fontSize:30}}>Looking to launch a large scale Digital Signage Network
</h1>
<p style={{textAlign:"start",marginBottom:20,fontSize:15,marginTop:20}}>We love building partnerships.
Get in touch! ,We love building partnerships. Get in touch!,We love building partnerships. Get in touch!
</p>
<p style={{textAlign:"start",fontSize:15}}><FaSwimmer style={{fontSize:40,marginRight:25,color:"#457ebb"}}></FaSwimmer>
    We love building partnerships.
Get in touch! 
</p>
<p style={{textAlign:"start",marginBottom:20,fontSize:15}}>
<FaSwimmer  style={{fontSize:40,marginRight:25,color:"#457ebb"}}></FaSwimmer>We love building partnerships.
Get in touch! 
</p>
<p style={{textAlign:"start",color:"black",fontSize:15}}>
"With Produc I feel"<br></br> <p style={{fontSize:15}}>We love building partnerships.
Get in touch! </p>
</p>


</Grid>
           </Grid>
        </div>
    )
}
