import React, { useState, useEffect } from 'react';
import g1 from './1.PNG';
import g2 from './2.PNG';
import g3 from './3.PNG';
import group from './group.svg';
import group2 from './group-2.svg';
import group8 from './group-8.svg';
import Card from '@material-ui/core/Card';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import {cardimg1,cardimg2,cardimg3} from './cssFunvtion';

  
export function FirstComponent(props) {
    
    return  <div> <div>  <Card  variant="outlined" style={cardimg1} > <img src={g1} alt="Logo" /> </Card> </div> 


    <div> <Card  variant="outlined" style={cardimg2}>  <img src={g2} alt="Logo" /></Card> </div>
     <div><Card  variant="outlined" style={cardimg3}> <img src={g3} alt="Logo" /></Card> </div> </div>;
  }

  export function SecondeComponent(props) {
    return <div>  <Card  variant="outlined" style={cardimg1} >   <img src={group8} alt="Logo" /> </Card> <Card  variant="outlined" style={cardimg2} > <img src={group} alt="Logo" /></Card> <Card  variant="outlined" style={cardimg3}><img src={group2} alt="Logo" /> </Card></div> ;
  }

  export function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    
    if (isLoggedIn) {
      return <FirstComponent />;
    }
    return <SecondeComponent />;
  }
  export  function ValueLabelComponent(props) {
    let disabled = true;
  const { children, open, value } = props;
  const [mood] = React.useState("happy");
  if (value === 10) {
    disabled = "happy";
  }
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="bottom" title={value} arrow>
      {children}
    </Tooltip>
  );
}


export function ValueLabelComponent2(props) {
    let disabled = true;
  const { children, open, value } = props;
  const [mood] = React.useState("happy");
  if (value === 10) {
    disabled = "Grand Public";
  }
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="bottom" title={disabled} arrow>
      {children}
    </Tooltip>
  );
}

export const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';



export const PrettoSlider = withStyles({
  root: {
    color: '#0000FF',
    height: 8,
  },
 
  thumb: {
    height: 30,
    width: 30,
    backgroundColor: '#0000FF',
    border: '6px solid White',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 12,
    borderRadius: 6,
  },
  rail: {
    height: 12,
    borderRadius: 4,
    color:'Red',
    borderColor:'Red',
  },
})(Slider);
