import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core"


export default function SimplePaper() {


  return (
      <div className="container flexcontainer" style={{marginTop:150,marginBottom:150}}>
   
     
     <Paper elevation={3} className="flexcontainer">

<div className="flexcontainer">

<h1 style={{color:"black",textAlign:"center",fontSize:30,marginTop:30}}>Looking to launch a large scale Digital Signage Network
</h1>
<p style={{textAlign:"center"}}>We love building partnerships.
Get in touch! 
</p>
<div className="flexcontainer" style={{width:"100%",justifyContent:"center",textAlign:"center",alignItems:"center"}}>
<Button variant="contained" color="secondary" size="medium" style={{width:"30%",marginTop:20,marginBottom:20}}>
    Contact
</Button>
</div>

</div>


     </Paper>
     
    </div>
  );
}