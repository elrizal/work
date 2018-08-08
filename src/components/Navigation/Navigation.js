import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ScrollAnimation } from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 2,
  },
  flex: {
    flex: 2,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <div align='left'>
          <img id='logo' src={require('/Users/erinrizal/Documents/work/src/images/logo.png')} />
          </div>
          <Typography variant="title" color="inherit" className={classes.flex}>
          </Typography>
          <div className='work-items'>
          <Link to="/">  main </Link>   <Link to="/uxui"> UX & UI Design </Link>   <Link to="/dev">  Web Development </Link>  <Link to="/branddesign">  Branding </Link>
          </div>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" align='right'>
          <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div >
  );
}
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ButtonAppBar);
