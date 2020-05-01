import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core"


export default function SimplePaper() {


  return (
      <div className="container" style={{marginTop:150,marginBottom:150}}>
   
     
     <Paper elevation={3} >

<div className="flexcontainer">

<h1 style={{color:"black"}}>Join our partner platform
</h1>
<p>We love building partnerships.
Get in touch! 
</p>


</div>
<div className="buttonorta">
<Button variant="contained" color="secondary" size="medium">
    Contact
</Button>
</div>

     </Paper>
     
    </div>
  );
}