import React from 'react';
import Layout from './Layout';
import { Container} from 'semantic-ui-react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
    { src: require('./images/tv/ec2.png'), width: 2, height: 1},
    { src: require('./images/tv/live-gc.jpg'), width: 2, height: 1},
    { src: require('./images/tv/greyfilmslogo.png'), width: 2, height: 1},
    { src: require('./images/tv/LOGO_TMR.png'), width: 2, height: 1},
    { src: require('./images/tv/loyolalooksnew.png'), width: 2, height: 1},
    { src: require('./images/tv/doubledose-flyernew.png'), width: 2, height: 1},
];
class BGallery extends React.Component {
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
const Broadcast = () => {
  return (
    <Layout>
      <div style={{'height':'35px'}}></div>
      <div align='center' className="animated fadeInLeft delay-20s">
      <h2>Broadcasted Designs</h2>
        Screen captures of introductions to televised productions at Greycomm Studios, MD.
      </div>
      <Container>
      <div align='center'>
      <BGallery />  
      </div>
      </Container>
      </Layout>
  );
};
export default Broadcast;