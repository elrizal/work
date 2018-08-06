import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import { Row, Col } from 'react-bootstrap';
import {Paper, Button, Grid} from '@material-ui/core/';
import { Container} from 'semantic-ui-react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import GalleryTest from './components/Gallery/Gallery';
import Lightbox from 'react-images';

function getModalStyle() {
  const top = 50; 
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});
const tileData = [
  {
      key: 1, 
      img: 'https://static1.squarespace.com/static/546fc106e4b007974054777d/t/5acc1c6170a6adaedb7bdc82/1523326051482/preview-wirefram-itslit.jpg?format=500w',
      title: 'Image 1'
  },
  {
      key: 2,
      img: 'https://static1.squarespace.com/static/546fc106e4b007974054777d/t/5acc1c6170a6adaedb7bdc82/1523326051482/preview-wirefram-itslit.jpg?format=500w',
      title: 'Image 2'
  },
  {
      key: 3,
      img: 'https://static1.squarespace.com/static/546fc106e4b007974054777d/54748e0ae4b0e7532cedb0bd/56b9fa9c60b5e93ef6c9195a/1487787681788/interestmeeting.png?format=2500w'
  },
  {
      key: 4,
      img: 'https://static1.squarespace.com/static/546fc106e4b007974054777d/54748e0ae4b0e7532cedb0bd/56b9fa9c60b5e93ef6c9195a/1487787681788/interestmeeting.png?format=2500w'
  }
];

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const result = tileData.filter(tile => <img onClick /> === tile.img);
    return (
      <div>
       
        <div className="animated fadeIn delay-20s">
       {tileData.map(tile => (
      <img id="tn" src={tile.img} alt={tile.title} onClick={this.handleOpen} />
       ))}
      </div>
      <GalleryTest/>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
          <img id="tn" onClick={this.handleOpen}  src={tileData.img} alt={tileData.title} />
          <Typography variant="title" id="modal-title"> 
          test
           </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};
// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);
const  classes  = this.props;
const DigitalDesign = () => {

  return (
    <Layout>
      <Container> 
      <div style={{'height':'30px'}}></div>
      <div align='center' className="animated fadeInLeft delay-20s">
      <h2>Brand Design</h2>
      <p>Case studies on re-brands and creative directions for new organizations.</p>
      </div>
      <SimpleModalWrapped/>

</Container>
    </Layout>
  );
};
export default DigitalDesign;
// render(<DigitalDesign />, document.getElementById('app'));