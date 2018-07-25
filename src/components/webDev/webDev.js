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

const photos = [
	{ src: require('/Users/erinrizal/Documents/work/src/images/preview/lit.jpg')},
	{ src: require('/Users/erinrizal/Documents/work/src/images/preview/cwn.jpg')},
	{ src: require('/Users/erinrizal/Documents/work/src/images/preview/movr.jpg')},
	{ src: require('/Users/erinrizal/Documents/work/src/images/preview/pf.jpg')},
	{ src: require('/Users/erinrizal/Documents/work/src/images/preview/train.jpg')},
  ];
  
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
  
  function webDev(props) {
    const { classes } = props;
    return (
      <div className={classes.root} style={{'padding':'10px'}}>
      <Row>
        <GridList cellHeight={{'height':'50vh'}} className={classes.gridList}  cols={3}>
          {websiteDev.map(tile => (
            <GridListTile key={tile.src} cols={tile.cols || 1}>
              <img id='galimg' src={tile.src} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
        </Row>
      </div>
      
    );
  }
  
  webDev.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(webDev);