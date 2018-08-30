import React from 'react';
import { Parallax } from 'react-parallax';
import './header.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Row, Col} from 'react-bootstrap';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});
function Header(props) {
  return (
  <div >
    <Parallax
     id='parallax'
     className='headermarble animated fadeIn'
      bgImage={require('../../images/6.jpg')}
      alt='header'
      strength={100}>
    <Row>
    <Col  xs={4}  sm={4} md={6} lg={6} >
      <div align="left" >
      <div id="header" >ERIN<br></br>
      LEIGH<br></br>
      RIZAL</div>
        </div>
      </Col>
      <Col  xs={8} sm={8}  md={6} lg={6} ><div>
      <img id='profile' className="animated fadeIn" src={require('../../images/mer.png')} alt='Erin'/>
      </div>
      </Col>
    </Row>
   </Parallax>
  </div>
);
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);
