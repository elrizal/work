import React from 'react';
// import { render } from 'react-dom';
import { Parallax, Background } from 'react-parallax';
import './header.css';
import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
// import Icon from '@material-ui/core/Icon';
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
  const { classes } = props;
  return (
  <div >
    <Parallax
     id='parallax'
      bgImage={require('/Users/erinrizal/Documents/work/src/images/headernew.png')}
      strength={200}>
    <Row>
    <Col  xs={4}  sm={4} md={6} lg={6} >
      <div align="left" >
      <h1 id="header" className="animated fadeIn delay-20s">ERIN
      LEIGH
      RIZAL</h1>
      {/* <Button variant="contained" color="secondary" className={classes.button}>
      SKIP TO WORK SAMPLES
      <ArrowDownward className={classes.rightIcon} />
      </Button> */}
        </div>
      </Col>
      <Col  xs={8} sm={8}  md={6} lg={6} ><div>
      <img className="animated fadeIn delay-50s" id='profile' src={require('/Users/erinrizal/Documents/work/src/images/mer.png')} />
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
