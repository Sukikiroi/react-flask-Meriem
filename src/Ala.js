import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import './App.css';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import {marks1, marks2,marks3} from './marks';
import {Sliders, OUIButton,NONButton,Textfiledcss,card} from './cssFunvtion';

import {FirstComponent, SecondeComponent,ValueLabelComponent,ValueLabelComponent2,PrettoSlider} from './Allfunction';
export const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));




ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};
ValueLabelComponent2.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
  };

export default function CustomizedSlider() {
   const classes = useStyles();
     const [yellAtPerson, setCount] =React.useState(true);
     const [variant, setvariant] =React.useState("outlined");
     const [variant2, setvariant2] =React.useState("contained");
  return (
    <div className={classes.root}>
    
      <Card   style={card}  variant="outlined"> 
      <Button variant={variant}  onClick={() => {setCount(false) ;setvariant("contained");setvariant2("outlined")} }  color="primary" style={OUIButton}>
         Oui
        </Button>
      <Button variant={variant2}  onClick={() => {setCount(true) ;setvariant("outlined");setvariant2("contained")} }   color="primary" style={NONButton}>
        Non
      </Button>
      <div>{(yellAtPerson && <FirstComponent />) || <SecondeComponent />}</div>
      <PrettoSlider style={Sliders} valueLabelDisplay="on" ValueLabelComponent={ValueLabelComponent} aria-label="pretto slider" defaultValue={20} marks={marks1}/>
      <div className={classes.margin} />
      <PrettoSlider  style={Sliders} valueLabelDisplay="on"ValueLabelComponent={ValueLabelComponent2}  aria-label="pretto slider" defaultValue={20}marks={marks2} />
      <div className={classes.margin} />
      <PrettoSlider style={Sliders}  ValueLabelComponent={ValueLabelComponent} aria-label="pretto slider" defaultValue={20}marks={marks3} />
      <div className={classes.margin} />
      <TextField type="number" inputProps={{ min: "0", max: "10", step: "1" }} style={Textfiledcss} />
     
      
      </Card>
    </div>
  );
}
