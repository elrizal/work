import React from 'react';
import Layout from './Layout';
import { Container} from 'semantic-ui-react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
    { src: require('./images/illust/front-pieces.jpg'), width: 2, height: 1.5},
    { src: require('./images/illust/frontpieces.jpg'), width: 1, height: 1},
    { src: require('./images/illust/instruction.png'), width: 1, height: 1.5},
    { src: require('./images/illust/pu205front.jpg'), width: 2.5, height: 2},
    { src: require('./images/illust/iconsmap.png'), width: 1.6, height: 2},
    { src: require('./images/prints/eocard.png'), width: 2, height: 4},
    { src: require('./images/illust/map.png'), width: 2, height: 2},
    { src: require('./images/illust/greymugfinal.png'), width: 0.8, height: 1},
    { src: require('./images/illust/greycommsticker.png'), width: 1.7, height: 1},
    { src: require('./images/illust/amy.png'), width: 0.7, height: 1},
    { src: require('./images/illust/recovery.png'), width: 0.7, height: 1},
    { src: require('./images/illust/cavesofandrozani.png'), width: 0.7, height: 1},
    { src: require('./images/illust/chilling.jpg'), width: 2, height: 2},
    { src: require('./images/illust/fanart.png'), width: 1.5, height: 2},
    { src: require('./images/illust/collage-tree.jpg'), width: 2, height: 2},
]
class IllustGallery extends React.Component {
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
const Illust = () => {
  return (
    <Layout>
      <div style={{'height':'35px'}}></div>
      <div align='center' className="animated fadeInLeft delay-20s">
      <h2>Illustrations</h2>
      Hand-drawn illustrations that served a part in UI and/or branding
      </div>
      <Container>
      <div align='center'>
      <IllustGallery />  
      </div>
      </Container>
      </Layout>
  );
};
export default Illust;