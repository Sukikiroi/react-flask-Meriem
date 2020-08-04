import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import BallotIcon from '@material-ui/icons/Ballot';
import FunctionsIcon from '@material-ui/icons/Functions';
import MoodIcon from '@material-ui/icons/Mood';
import {withRouter} from 'react-router-dom';
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
function CustomizedMenus({ history }) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const mystyle = {
    color: "white",
    backgroundColor: "RebeccaPurple",
    padding: "10px",
    fontFamily: "Arial",
    left:"300px"
  };
  return (
      
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick} style={mystyle}
       
      >
        Open Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem  onClick={() => history.push('/Classification')}>
          <ListItemIcon>
            <BallotIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Classification" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => history.push('/Comparaison')}>
          <ListItemIcon>
            <FunctionsIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Comparaison" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => history.push('/Prediction')}>
          <ListItemIcon>
            <MoodIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Prediction" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
export default withRouter(CustomizedMenus)