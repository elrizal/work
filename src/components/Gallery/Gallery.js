import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: require('../../images/items/showcase-yri.jpg'), width: 1, height: 1, title:'first' },
  { src: require('../../images/items/showcase-studentlife.jpg'),width: 1, height: 1, title: 'second' },
  { src: require('../../images/items/showcase-sheas.jpg'), width: 1, height: 1 },
  { src: require('../../images/items/sheabranding.jpg'),  width: 1, height: 1 },
  { src: require('../../images/items/beersphere.png'), width: 1, height: 1 },
  { src: require('../../images/items/itslitl.png'), width: 1, height: 1 },
  { src: require('../../images/items/atn.png'), width: 1, height: 1 },
  { src: require('../../images/items/cwn.png'), width: 1, height: 1 },
  { src: require('../../images/items/showcase-udl.jpg'), width: 1, height: 1 },
  { src: require('../../images/items/showcase-opensys.jpg'), width: 1, height: 1 },
  { src: require('../../images/items/showcase-mprop.jpg'), width: 1, height: 1 }
];

class BrandGallery extends React.Component {
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
        <Gallery photos={photos} onClick={this.openLightbox} />
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
export default BrandGallery;
