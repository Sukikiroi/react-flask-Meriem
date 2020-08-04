import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: "",
    Training:""
  }

  getB() {
    axios.get(`http://127.0.0.1:5000/api/task`)
      .then(res => {
        
        this.setState({ persons:res.data });
      })}

      
      getA() {
      axios.get(`http://127.0.0.1:5000/api/test`)
      .then(res => {
        
        this.setState({ Training:res.data });
      })
  }

  render() {
    const mystyle = {
        color: "white",
        backgroundColor: "RebeccaPurple",
        padding: "10px",
        fontFamily: "Arial",
        bottom:"100px",
        width:"300px",
        left:"300px"
      };
    return (
        <div>
        <div>  <h1 style={mystyle} > {this.state.persons}</h1></div>
        <div> <h1 style={mystyle} > {this.state.Training}</h1></div>
        <Button variant="contained" color="primary">
        Primary
      </Button>
      </div>
    
    
     
    )
  }
}