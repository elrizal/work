import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from './Layout';
import { withStyles } from '@material-ui/core/styles';
import { Container} from 'semantic-ui-react';
import ScrollAnimation from 'react-animate-on-scroll';
import SimpleModalWrapped from './components/Modal/Modal';
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
  function DevPage(props) {
    const { classes } = props;
    return (
    <Layout>
      <div style={{'height':'30px'}}></div>
      <div align='center' className="animated fadeInLeft delay-20s">
      <h1>Web development</h1>
      <p>Full stack applications created as passion-projects</p>
      </div>
      <Container className="animated fadeIn delay-20s">
      <Row >
      <Col xs={12} sm={12}  md={6} lg={4}>
        <img  id='galimg' src={require('./images/preview/lit.jpg')} alt='lit' a href="http://sleepy-peak-84439.herokuapp.com/" target='_blank'/>
          <h2>It's Lit</h2>
          <p>The app was created with the goal of creating a community of avid book-lovers. Functioning as an online library, 
        users can contact others in their area that have a book on their wish list. 
        Saving money and time, users can then continue to build on the people they meet and the books they find.</p>
        <p><strong>Built with:</strong> HTML/CSS3, JQuery, MySQL, Sequelize</p>
          <Button variant="outlined" color="primary" a href="http://sleepy-peak-84439.herokuapp.com/" target='_blank' rel="noopener noreferrer"> Website</Button> <Button variant="outlined" color="primary" a href="https://github.com/elrizal/its-lit" target='_blank' rel="noopener noreferrer">GitHub</Button>
        </Col>
        <Col xs={12} sm={12}  md={6} lg={4}>
        <img id='galimg' src={require('./images/preview/cwn.jpg')} alt='cook with nana'/>
            <h2>Cook With Nana</h2>
            <p>Want to learn to cook? This app was created for connecting the culinary-challenged to senior citizens looking to teach cooking with
              that "home-made feel". Once signing up, users of all ages can seek advice/meet-ups with grandmas or for grandmas seeking to share their
              wisdom.
            </p>
          <p><strong>Built with:</strong> MySQL, Sequelize, Axios, Passport, React and style plugins</p>
          <Button variant="outlined" color="primary" a href="https://peaceful-woodland-77310.herokuapp.com/" target='_blank' rel="noopener noreferrer"> Website</Button> <Button variant="outlined" color="primary" a href="https://github.com/elrizal/CookWithNana" target='_blank' rel="noopener noreferrer">GitHub</Button>
        </Col>
        <Col  xs={12} sm={12}  md={6} lg={4}>
         <img id='galimg' src={require('./images/preview/movr.jpg')} alt='movr' />
          <h2>MOVR</h2>
          <p>The app was created with the goal of creating a community of avid book-lovers. Functioning as an online library, 
          users can contact others in their area that have a book on their wish list. 
          Saving money and time, users can then continue to build on the people they meet and the books they find.</p>
          <p><strong>Built with:</strong> HTML/CSS3, JQuery, Materialize, NodeJS, Express, custom API</p>
          <Button variant="outlined" color="primary" a href="https://moverapp.herokuapp.com/" target='_blank' rel="noopener noreferrer"> Website</Button> <Button variant="outlined" color="primary" a href="https://github.com/elrizal/finderApp" target='_blank' rel="noopener noreferrer">GitHub</Button>
        </Col>
        <Col  xs={12} sm={12}  md={6} lg={4}>
        <img id='galimg' src={require('./images/preview/train.jpg')} alt='train scheduler' />
          <h2>Train Scheduler</h2>
          <p>This app is targeted for train conductors who want to report the time of arrival of their train and to view reports from
            others, as well. 
          </p>
          <p><strong>Built with:</strong> HTML/CSS3, Bootstrap, Firebase</p>
          <Button variant="outlined" color="primary" a href="https://elrizal.github.io/train-scheduler/" target='_blank' rel="noopener noreferrer"> Website</Button> <Button variant="outlined" color="primary" a href="https://github.com/elrizal/train-scheduler" target='_blank' rel="noopener noreferrer">GitHub</Button>
        </Col>
        <Col  xs={12} sm={12}  md={6} lg={4}>
        <img id='galimg' src={require('./images/preview/pf.jpg')} alt='portfolio template' />
            <h2>Portfolio Template</h2>
            <p>This simple site was designed with the intention of creating a template for people who
              are new to coding. With a bootstrap plugin, other developers can reuse the code to re-purpose it for their own showcase of work.
            </p>
          <p><strong>Built with:</strong> HTML/CSS3, Bootstrap</p>
          <Button variant="outlined"  a href="https://elrizal.github.io/Responsive-portfolio/" target='_blank' rel="noopener noreferrer"> Website</Button> <Button variant="outlined" color="primary" a href="https://github.com/elrizal/Responsive-portfolio" target='_blank' rel="noopener noreferrer">GitHub</Button>
        </Col>
        </Row>
      </Container>
    </Layout>
    );
  }
DevPage.propTypes = {
    classes: PropTypes.object.isRequired,
};
  export default withStyles(styles)(DevPage);