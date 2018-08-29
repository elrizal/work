import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import { Row, Col } from 'react-bootstrap';
import {Paper, Button, Grid} from '@material-ui/core/';
import { Container} from 'semantic-ui-react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: require('./images/sm/nivo-test-rizal1.png'), width: 1, height: 1 },
  { src: require('./images/sm/bombas-skateboard.png'), width: 1.5, height: 1 },
  { src: require('./images/sm/4morning.png'), width: 1, height: 1},
  { src: require('./images/sm/avit-bottles2.png'), width: 1, height: 1 },
  { src: require('./images/sm/avit-pinapple3.png'), width: 1, height: 0.8, title:'first' },
  { src: require('./images/sm/avoidholidaystress.png'), width: 2, height: 2.5 },
  { src: require('./images/sm/bar-templ.png'), width: 1, height: 1 },
  { src: require('./images/sm/bestpractices2.jpg'), width: 2, height: 1 },
  { src: require('./images/sm/bombas-fd.png'), width: 1, height: 1 },
  { src: require('./images/sm/boomtwitterheaderr2.png'), width: 2, height: 1 },
  { src: require('./images/sm/drh-person.png'), width: 1, height: 1 },
  { src: require('./images/sm/drhnoworry.png'), width: 1.5, height: 1 },
  { src: require('./images/sm/fb-header1.jpg'), width: 2, height: 1 },
  { src: require('./images/sm/andykimtwitter.jpg'),width: 2, height: 1},
  { src: require('./images/sm/gbdoodle.png'), width: 1, height: 1 },
  { src: require('./images/sm/hcbbqmerge-dc.png'), width: 1, height: 1 },
  { src: require('./images/sm/hcctestimonialjuly02.png'), width: 1, height: 0.7 },
  { src: require('./images/sm/LO-JB.png'), width: 1, height: 1 },
  { src: require('./images/sm/nbpromo2.png'), width: 1.5, height: 1 },
  { src: require('./images/sm/oakemail2.png'), width: 1, height: 1 },
  { src: require('./images/sm/ossoffelectiontuesday-phone2.jpg'), width: 2, height: 1 },
  { src: require('./images/sm/june18thparnell-twitterstorm2.jpg'), width: 2, height: 1 },
  { src: require('./images/sm/proyof.png'), width: 1.5, height: 1 },
  { src: require('./images/sm/td-proyo.png'), width: 1, height: 1 },
  { src: require('./images/sm/sandwitch-hhc-01.png'), width: 1.5, height: 1 },
  { src: require('./images/sm/veestro-fridge.png'), width: 1.5, height: 1 },
  { src: require('./images/sm/world2.png'), width: 1.5, height: 1 },
];
class SmGallery extends React.Component {
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

const  classes  = this.props;
const SmDesign = () => {
  return (
    <Layout>
      <div style={{'height':'35px'}}></div>
      <div align='center' className="animated fadeInLeft delay-20s">
      <h2>Social Media Campaigns</h2>
      Cases of click-inducing ads for online presence. 
      </div>
      <Container>
      <div align='center'>
      <SmGallery />  
      </div>
      </Container>
      </Layout>
  );
};
export default SmDesign;