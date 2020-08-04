import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Menu2 from './Menu2';
import  { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const mystyle = {
  color: "white",
  'borderRadius':'10px',
  backgroundColor: "Purple",
  padding: "10px",
  fontFamily: "Arial",
  bottom:"100px",
  width:"300px",
  height:"200px",
  
  right:"900px"
};
 //Css of The Card
  const Cardo = {
  height: '300px',
  backgroundColor: "WhiteSmoke",
  borderRadius:'60px',
  width:'600px',
  fontFamily: "Arial"
};
const Boton = {
  margin: "0 10px", 
  backgroundColor: "Purple",
  borderRadius:'10px',
  top:'100px',
  right:'250px',
  fontFamily: "Arial"
};
const Textfild = {
 
  borderRadius:'90px',
  top:'10px',
  left:'50px',
  fontFamily: "Arial"
};
export default function BasicTextFields() {
  const classes = useStyles();

  return (
    
    <div> 
   
    <Menu2/>
    <h1 style={mystyle} > </h1>
    <Card   style={Cardo}  variant="outlined">
    <TextField id="outlined-basic"  style={Textfild} label="Compound Name " variant="outlined"  />  
    <TextField id="outlined-basic"  style={Textfild}   label="ESOL" variant="outlined" />
    <TextField id="outlined-basic"  style={Textfild}  label="Molecular Weight" variant="outlined" />
    <TextField id="outlined-basic"   style={Textfild} label="Number of H-Bond Donors" variant="outlined"  />
    <TextField id="outlined-basic"   style={Textfild}  label="Number of Rings" variant="outlined"  />
    <TextField id="outlined-basic"   style={Textfild}  label="Number of Rotatable Bonds" variant="outlined"  />
    <Button style={Boton}
   variant="contained"
   color="primary"
   
   startIcon={<AssessmentIcon />}
 >
   Predict
 </Button>
 </Card>
 
  </div> 
  );
}
