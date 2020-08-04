import React from 'react';
import Switch from '@material-ui/core/Switch';
import axios from 'axios'
export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });
let Data1='Data1'
  const handleChange = (event) => {
     
      axios.post(`http://127.0.0.1:5000/api/arbre`,{ Data1 })
        .then(res => {
          console.log('AAAAAAAAAAAAAAAA'+res.data);
        })
        setState({ ...state, [event.target.name]: event.target.checked });
    
  };
  const mystyle = {
    color: "white",
    'borderRadius':'10px',
    backgroundColor: "Purple",
    padding: "10px",
    fontFamily: "Arial",
    bottom:"10px",
    width:"300px",
    height:"90px",
    right:"30px"
  };
  const [Data, setData] =React.useState("classification with the First Data");
  return (
    <div><h2 style={mystyle} >  {Data}</h2>
         <label style={{color:'white'}}>
     DATA 2
        </label>
        
      <Switch 
        checked={state.checkedA}
        onClick={() => {setData(" classification with the Seconde Data") } }
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
  
     <label style={{color:'white'}}>
     DATA 1    
        </label>
      <Switch
        checked={state.checkedB}
        onClick={() => {setData("classification with the First Data") } }
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      
    </div>
  );
}
