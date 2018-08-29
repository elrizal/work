import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container} from 'semantic-ui-react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react'
import '../../css/index.css';
import Hamburger from '../Hamburger/Hamburger';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}  id="navContainer">
      <AppBar position="fixed" className='animate fadeInDown'>
      <Hamburger />
        <Toolbar>
          <div align='left'><Link to="/"> 
          <img id='logo' src={require('../../images/logo.png')} /></Link> 
          </div>
          <Container align='right'>
          <div className='work-items'>
          </div>
          </Container>
        </Toolbar>
      </AppBar>
    </div >
  );
}
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ButtonAppBar);
