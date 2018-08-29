import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import { Row, Col } from 'react-bootstrap';
import {Paper, Button, Grid} from '@material-ui/core/';
import { Container} from 'semantic-ui-react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
    { src: require('./images/posters/channel.png'), width: 0.8, height: 1.5},
    { src: require('./images/posters/interestmeeting.png'), width: 0.8, height: 1.5},
    { src: require('./images/posters/wocc.png'), width: 0.8, height: 1.5},
    { src: require('./images/posters/springservice.jpg'), width: 1, height: 1.5},
    { src: require('./images/posters/2020.png'), width: 1, height: 1.5},
    { src: require('./images/posters/magad.png'), width: 1, height: 1.5},
    { src: require('./images/posters/cleanup.png'), width: 1.5, height: 1},
    { src: require('./images/posters/ccsjrecruit.png'), width: 1, height: 1.5},
    { src: require('./images/posters/sl-sss.jpg'), width: 0.8, height: 1.5},
    { src: require('./images/posters/la.jpg'), width: 1, height: 0.8},
    { src: require('./images/posters/meet.png'), width: 1.5, height: 1},
    { src: require('./images/posters/mixer.jpeg'), width: 1, height: 1.5},
    { src: require('./images/posters/recruit-gc.jpg'), width: 1, height: 1.5},
    { src: require('./images/posters/teachin.png'), width: 1, height: 1.5},
    { src: require('./images/posters/thetable.jpg'), width: 1, height: 1.5},
];
class PosterGallery extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery Col={6} photos={photos} onClick={this.openLightbox} />
	    <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
		  isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}
const  classes  = this.props;
const Posters = () => {
  return (
    <Layout>
      <div style={{'height':'35px'}}></div>
      <div align='center' className="animated fadeInLeft delay-20s">
      <h2>Print Campaigns</h2>
        Cases of out-of-home advertising art direction and poster designs
      </div>
      <Container>
      <div align='center'>
      <PosterGallery />  
      </div>
      </Container>
      </Layout>
  );
};
export default Posters;