import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from './Layout';
import { withStyles } from '@material-ui/core/styles';
import { Container} from 'semantic-ui-react';
import Button from '@material-ui/core/Button';

  const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {},
    subheader: {
      width: '50%', },
  });
  function UXpage(props) {
    const { classes } = props;
    return (
    <Layout>
      <div style={{'height':'30px'}}></div>
      <div align='center' className="animated fadeInLeft delay-20s">
      <h2>UX and UI design</h2>
      <p>Case studies</p>
      </div>
      <Container className="animated fadeIn delay-20s">
      <Row >
      <Col xs={12} sm={12}  md={6} lg={4}>
        <img  id='galimg' src={require('./images/preview/lit.jpg')} alt='lit' target='_blank'/>
          <h2>Where For Re-Design</h2>
          <p>In earning my certificate at Springboard's UX Design School, I decided to re-design the travel website,
            <a href="wherefor.com" target='_blank' rel="noopener noreferrer">Wherefor.com</a>. By studying its competitors, interviewing its target-audience and testing out a prototype of the re-designed
            product, I came up with a final, purposed design built in InVision.
          </p>
        <Button variant="outlined" color="primary" a href="https://peaceful-woodland-77310.heroku.com" target='_blank' rel="noopener noreferrer">View Case</Button> 
        </Col>
        <Col xs={12} sm={12}  md={6} lg={4}>
        <img id='galimg' src={require('./images/preview/cwn.jpg')} alt='cook with nana'/>
            <h2>It's Lit</h2>
            <p>The process behind the UX planning for an application I created with a group of other developers, called  <a href="http://sleepy-peak-84439.herokuapp.com/" target='_blank' rel="noopener noreferrer">It's Lit</a>
            </p>
          <Button variant="outlined" color="primary" a href="https://peaceful-woodland-77310.heroku.com" target='_blank' rel="noopener noreferrer">View Case</Button> 
        </Col>
        <Col xs={12} sm={12}  md={6} lg={4}>
        <img id='galimg' src={require('./images/preview/cwn.jpg')} alt='cook with nana'/>
            <h2>Equipment Zone UI Guide </h2>
            <p>As part of our goal to refine the brand, I created a design guide for <a href="http://www.equipmentzone.com" target='_blank' rel="noopener noreferrer">Equipment Zone</a>. 
            While previously having an inconsistent approach to the UI of its website, the guide was created to serve as a quick reference for the team and 
            freelance developers/designers.
            </p>
        <Button variant="outlined" color="primary" a href="https://peaceful-woodland-77310.heroku.com" target='_blank' rel="noopener noreferrer">View Guide</Button> 
        </Col>
        </Row>
        </Container>
    </Layout>
    );
  }
UXpage.propTypes = {
    classes: PropTypes.object.isRequired,
};
  export default withStyles(styles)(UXpage);