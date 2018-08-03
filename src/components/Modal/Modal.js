import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import tile from '/Users/erinrizal/Documents/work/src/DevPage.js';
import GridListTile from '@material-ui/core/GridListTile';

const websiteDev = [
  { title: "It's Lit",
    src: require('/Users/erinrizal/Documents/work/src/images/preview/lit.jpg')},
  { title: "Cook With Nana",
    src: require('/Users/erinrizal/Documents/work/src/images/preview/cwn.jpg')},
  { title: "MOVR", src: require('/Users/erinrizal/Documents/work/src/images/preview/movr.jpg')},
  { title: "Portfolio Template", src: require('/Users/erinrizal/Documents/work/src/images/preview/pf.jpg')},
  { title: "Train Scheduler", src: require('/Users/erinrizal/Documents/work/src/images/preview/train.jpg')},
]; 

function getModalStyle() {
  const top = 20;
  const left = 10; 
  const right = 10; 
  return {
    top: `${top}%`,
    left: `${left}%`,
    right: `${right}%`,
     transform: `translate(-${top}%, -${left}%, -${right}%)`,
    width: "80vw"
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
    return (
      <div>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <img id='galimg' src={tile.src} alt={tile.title} />
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
        <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
            {websiteDev.map(tile => (
        <GridListTile key={tile.src} cols={tile.cols || 1} className="animated fadeIn delay-20s">
          <img id='galimg' src={tile.src} alt={tile.title} />
          <p align='center'>{tile.title}</p>
        </GridListTile>
          ))}
            </Typography>
            <SimpleModalWrapped />
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
export default SimpleModalWrapped;