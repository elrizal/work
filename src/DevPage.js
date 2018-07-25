import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Row, Col } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from './Layout';
import { Container} from 'semantic-ui-react';
import ScrollAnimation from 'react-animate-on-scroll';
import websiteDev from '/Users/erinrizal/Documents/work/src/websiteDev.js'; 

// const websiteDev = [
// 	{ src: require('/Users/erinrizal/Documents/work/src/images/preview/lit.jpg')},
// 	{ src: require('/Users/erinrizal/Documents/work/src/images/preview/cwn.jpg')},
// 	{ src: require('/Users/erinrizal/Documents/work/src/images/preview/movr.jpg')},
// 	{ src: require('/Users/erinrizal/Documents/work/src/images/preview/pf.jpg')},
// 	{ src: require('/Users/erinrizal/Documents/work/src/images/preview/train.jpg')},
//   ];
  
  const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
    },
    subheader: {
      width: '50%',
    },
  });
  function DevPage(props) {
    const { classes } = props;
    return (
      <Layout>
      <Container>
      <div style={{'height':'30px'}}></div>
      <div align='center' className="animated fadeInLeft delay-20s">
      <h2 >web development</h2>
      <p>Apps created with the user in mind.</p>
      </div>
      <div className={classes.root} >
      <Row>
        <GridList cellHeight={{'height':'50vh'}} cellWidth={{'height':'50vh'}}  className={classes.gridList}  cols={3}>
          {websiteDev.map(tile => (
            <GridListTile key={tile.src} cols={tile.cols || 1} className="animated fadeIn delay-20s">
              <img id='galimg' src={tile.src} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
        </Row>
      </div>
      </Container>
      </Layout>
    );
  }
  
  DevPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(DevPage);