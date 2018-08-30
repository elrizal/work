import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Layout from './Layout';
import { withStyles } from '@material-ui/core/styles';
import { Container} from 'semantic-ui-react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

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
    return (
    <Layout>
      <div style={{'height':'30px'}}></div>
      <div align='center' className="animated fadeInLeft delay-20s">
      <h2>UX and UI design</h2>
      Case studies
      </div>
      <Container>
      <Row>
      <Col xs={12} sm={12}  md={6} lg={3}>
        <img  id='galimg' src={require('./images/preview/wf-prev.png')} alt='where for' target='_blank'/>
          <h2>Where For Re-Design</h2>
          <p>In earning my certificate at Springboard's UX Design School, I decided to re-design the travel website, <a href="wherefor.com" target='_blank' rel="noopener noreferrer">Wherefor.com</a>. 
          Through research on its target users, I create the proposed re-design on an InVision prototype.
          </p>
        <Link to="/wherefor">< Button variant="outlined" color="primary"  target='_blank' rel="noopener noreferrer">View Case</Button> </Link>
        </Col>
        <Col xs={12} sm={12}  md={6} lg={3}>
        <img id='galimg' src={require('./images/preview/preview-wireframe-itslit.jpg')} alt='its lit'/>
            <h2>It's Lit</h2>
            <p>The process behind the UX planning for an application I created with a group of other developers, called <a href="https://peaceful-woodland-77310.heroku.com"  target='_blank' rel="noopener noreferrer">
              It's Lit</a>.
             As an original idea with a short time-frame (about 1 week due until a full stack application)
            The team conducted a brief design sprint in order to wireframe and code a MVP 
              within one day. 
            </p>
          <Button variant="outlined" color="primary" a href="https://peaceful-woodland-77310.heroku.com" target='_blank' rel="noopener noreferrer">View Case</Button> 
        </Col>
        <Col xs={12} sm={12}  md={6} lg={3}>
        <img id='galimg' src={require('./images/preview/ez-prev.png')} alt='equipment zone'/>
            <h2>Equipment Zone UI</h2>
            <p>As part of our goal to refine the brand, I created a design guide for <a href="http://www.equipmentzone.com" target='_blank' rel="noopener noreferrer">Equipment Zone</a>. 
            While previously having an inconsistent approach to the UI of its website, the guide was created to serve as a  reference for the team and 
            freelancers.
            </p>
        <Button variant="outlined" color="primary" a href="https://indd.adobe.com/view/55060eb5-04ee-4d77-a88b-4dfa1a28802b" target='_blank' rel="noopener noreferrer">View Guide</Button> 
        </Col>
        <Col xs={12} sm={12}  md={6} lg={3}>
        <img id='galimg' src={require('./images/preview/icons-prev.png')} alt='iconography'/>
            <h2>GreyComm Studios Iconography</h2>
            <p>As part of brushing up Greycomm Studio's Google and Sharepoint accounts, these icons were illustrated and published to highlight the functions of the studio and each employee's role. 
            </p>
        <Button variant="outlined" color="primary" a href={require('./images/items/icons-gc.png')} target='_blank' rel="noopener noreferrer">View Icons</Button> 
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