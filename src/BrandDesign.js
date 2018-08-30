import React from 'react';
import Layout from './Layout';
import { Container} from 'semantic-ui-react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: require('./images/items/showcase-yri.jpg'), width: 1, height: 1, title:'first' },
  { src: require('./images/items/showcase-studentlife.jpg'),width: 1, height: 1, title: 'second' },
  { src: require('./images/items/atn-logos.png'), width: 1, height: 1 },
  { src: require('./images/items/its-lit-logo.png'), width: 1, height: 1 },
  { src: require('./images/items/beer-logo.png'), width: 1, height: 1 },
  { src: require('./images/items/cwn-logo.png'), width: 1, height: 1 },
  { src: require('./images/items/showcase-rh.jpg'), width: 1, height: 1 },
  { src: require('./images/items/showcase-udl.jpg'), width: 1, height: 1 },
  { src: require('./images/items/showcase-opensys.jpg'), width: 1, height: 1 },
  { src: require('./images/items/showcase-mprop.jpg'), width: 1, height: 1 },
  { src: require('./images/items/mycroft.png'), width: 1, height: 1 },
  { src: require('./images/items/dresjay-logos.png'),  width: 1, height: 1 },
  { src: require('./images/items/showcase-sheas.jpg'), width: 1, height: 1 },
  { src: require('./images/items/sheabranding.jpg'),  width: 1, height: 1 },
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
        <Gallery Col={6
        } photos={photos} onClick={this.openLightbox} />
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
const BrandDesign = () => {
  return (
    <Layout>
      <div style={{'height':'35px'}}></div>
      <div align='center' className="animated fadeInLeft delay-20s">
      <h2>Logo and Brand Design</h2>
      A brief overview on re-brands and creative directions for new organizations.
      </div>
      <Container>
      <div align='center'>
      <BrandGallery />  
      </div>
      </Container>
      </Layout>
  );
};
export default BrandDesign;