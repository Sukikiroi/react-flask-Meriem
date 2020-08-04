import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const fetchWeather = function (e) {
    e.preventDefault();
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Zeist&appid=MYID')
    .then(res => {
        console.log(res.data); 
    });
    console.log();
}
  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit = {fetchWeather}>
     
      <TextField id="outlined-basic" label="Outlined"   variant="outlined" />
    </form>
  );
}
