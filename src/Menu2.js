import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {withRouter} from 'react-router-dom';
import BlurOffIcon from '@material-ui/icons/BlurOff';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));
function ScrollableTabsButtonForce({ history }) {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Mnu = {
    backgroundColor:"Indigo" ,
    color:"Linen",  
    padding: "10px",
    width:"600px",
    marginLeft: '15rem' 
  };
  return (
    <div className={classes.root} style={Mnu}>
      <AppBar position="static" color="default" >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Classification" icon={<AddToQueueIcon />} {...a11yProps(0)} onClick={() => history.push('/Classification')} />
          <Tab label="Comparaison" icon={<AssignmentIcon />} {...a11yProps(1)} onClick={() => history.push('/Comparaison')} />
          <Tab label="Prediction" icon={<BlurOffIcon />} {...a11yProps(2)} onClick={() => history.push('/Prediction')}/>
         
        </Tabs>
      </AppBar>
     
    </div>
  );
}
export default withRouter(ScrollableTabsButtonForce)