import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import { Row, Col } from 'react-bootstrap';
import {Paper, Button, Grid} from '@material-ui/core/';
import { Container} from 'semantic-ui-react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
    { src: require('./images/prints/PU006115.png'), width: 1, height: 1},
    { src: require('./images/prints/FB086.png'), width: 1, height: 1},
    { src: require('./images/prints/FB087.jpg'), width: 1, height: 1},
    { src: require('./images/prints/FH1006.png'), width: 1, height: 1},
    { src: require('./images/prints/wheels-together.jpg'), width: 1, height: 1},
    { src: require('./images/prints/ra2015-onshirt.jpg'), width: 1, height: 1},
    // { src: require('./images/prints/ra15shirt.jpg'), width: 1, height: 1},
    { src: require('./images/prints/ra14bacfront.jpg'), width: 1, height: 1},
    { src: require('./images/prints/rate14backdraft.jpg'), width: 1, height: 1},
    { src: require('./images/prints/eolabels.jpg'), width: 2, height: 1.5},

    { src: require('./images/prints/toobs.jpg'), width: 1, height: 1},
    { src: require('./images/prints/tobibag.jpg'), width: 1, height: 1},
    { src: require('./images/prints/corgi.jpg'), width: 1, height: 1},
    { src: require('./images/prints/corgiblanket.jpg'), width: 1, height: 1},
    { src: require('./images/prints/F16407lg.png'), width: 3, height: 1},
    { src: require('./images/prints/FH3011.jpg'), width: 1, height: 1},
];
class PGallery extends React.Component {
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
const PrintDesign = () => {
  return (
    <Layout>
      <div style={{'height':'35px'}}></div>
      <div align='center' className="animated fadeInLeft delay-20s">
      <h2>Print Design</h2>
    Samples in creating print packaging and posters for boosting product branding
      </div>
      <Container>
      <div align='center'>
      <PGallery />  
      </div>
      </Container>
      </Layout>
  );
};
export default PrintDesign;