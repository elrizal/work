import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import { Row, Col } from 'react-bootstrap';
import { Button} from '@material-ui/core/';
import { Container} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { withStyles } from '@material-ui/core/styles';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { Parallax, Background} from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';

const photos = [
  { src: require('./images/uxui/brand-wherefor1.jpg'), width: 0.8, height: 1},
  { src: require('./images/uxui/brand-wherefor2.jpg'),width: 0.8, height: 1},
  { src: require('./images/uxui/brand-wherefor3.jpg'),width: 0.8, height: 1},
];
class WfGallery extends React.Component {
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
        <Gallery  photos={photos} onClick={this.openLightbox} />
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
const WFCase = (props) => {
  return (
        <div>
        <Parallax bgImage={require('./images/wf-bannerbg.jpg')}
         strength={20}>
        <div className='para-items' align='center' style={{height: '100vh'}}> 
        <img id='wf'className="animated fadeIn" src={require('./images/wf-main.png')} />
        </div>
        </Parallax>
        <Layout>
      <Container> 
      <div align='center' >
      <h1>Wherefor.com Case Study</h1>
      <p align="left">Inspired by the recent budget travel site to hit the savvy wonder-luster's radar, Where For, I chose it
       as the basis for a re-design during my UX design course at Springboard. As an already amazing site on its own, I wanted
      to see how much further I could take it with the knowledge I picked up in the course. The site has a simple premise- 
      plug in a budget for travel and then search away flights and hotels you can book on-site. The site is picking up steam
      and highly recognized across the web, yet, why stop at plugging in values and searching? Some individuals come in at 
      a disadvantage when it comes to finding the time, money and organization of a trip may not have the chance to throw 
      in a large budget and get a slew of results. 
      </p><p align="left">Therefore, in planning the project, my goal was to focus on empowering millennials, new travelers 
      and busy families in planning their trip when cash is tight and travel-know-how is low.</p>
      </div>
      </Container>
      <Parallax bgImage={require('./images/uxui/lakebg.jpg')}
         strength={500}>
         <Container>
      <ScrollAnimation animateIn="fadeInRight">
      <h1 align='center'>Research Phase:</h1>
      <div className='custom-hr'></div>
      <Row>
      <Col xs={12} sm={12}  md={6} lg={4}>
          <h2>1- Know thy user</h2>
          <p>After defining my goals for the website design, as well as my target audience. In the end of the study, 
          I found that users of travel sites found them particularly lacking in expanding an experience outside of
          booking and paying.
          </p>
        <Button variant="contained" color="primary" a href="https://drive.google.com/file/d/0B3oo1iO2KDAMbnB5Z3JKWHB4bWc/view" target='_blank' rel="noopener noreferrer">Review Results</Button> 
        </Col>
        <Col xs={12} sm={12}  md={6} lg={4}>
          <h2>2- HEURISTICS </h2>
          <p>So where to go from here? Taking into accounting the "rules of thumb" in UX design, 
              taking apart the features the site have/didn't have was a guide in deciding what would meet expectations for users.
          </p>
        <Button variant="contained" color="primary" a href="https://drive.google.com/file/d/0B3oo1iO2KDAMai1zSW5nSHBJZ00/view" target='_blank' rel="noopener noreferrer">View Study</Button> 
        </Col>
        <Col xs={12} sm={12}  md={6} lg={4}>
          <h2>3- Empathy & Personas</h2>
          <p>Based on what was learned about my participants, I created "personas" or fictional people to represent their experiences. Each represented the audiences for the 
              new features I planned to create for the site: a more refined search, talking to a local and building a travel group
          </p>
        <Button variant="contained" color="primary" a href="https://www.slideshare.net/ErinLeighRizal" target='_blank' rel="noopener noreferrer">View Case</Button> 
        </Col>
        </Row>    
        <br></br>
        </ScrollAnimation>
        </Container>
        <ScrollAnimation animateIn="slideInUp">
        <img id='lake' style={{'maxHeight':'30%'}} src={require('./images/uxui/mountains/lakebg.png')} />
        </ScrollAnimation>
        </Parallax>
    
      <Parallax bgImage={require('./images/uxui/mountains/citybg.jpg')} strength={100}>
         <Container>
      <ScrollAnimation animateIn="fadeInLeft">
      <h1 align='center'>Refine & Tune:</h1>
      <div className='custom-hr'></div>
      <Row>
      <Col xs={12} sm={12}  md={6} lg={4}>
          <h2>4- USERFLOWS</h2>
          <p>The site's informational architecture was created around the average preferences of participants in the last study. 
            After determining a set form for these sections, user flows, or a "map" for how a hypothetical user would use the 
            site for their goals were created.   </p>
        <Button variant="contained" color="primary" a href={require('./images/uxui/userflows.png')} 
        target='_blank' rel="noopener noreferrer">Review Results</Button> 
        </Col>
        <Col xs={12} sm={12}  md={6} lg={4}>
          <h2>5- WIREFRAMING </h2>
          <p>So where to go from here? Taking into accounting the "rules of thumb" in UX design, 
              taking apart the features the site have/didn't have was a guide in deciding what would meet expectations for users.
          </p>
        <Button variant="contained" color="primary" a href="https://drive.google.com/file/d/0B3oo1iO2KDAMRXdpV2dfcFdqM3M/view?usp=sharing" target='_blank' rel="noopener noreferrer">View Study</Button> 
        </Col>
        <Col xs={12} sm={12}  md={6} lg={4}>
          <h2>6- USER TESTING</h2>
          <p>At this stage, 5 participants representing the target audience were given tasks core to the site. For the focus 
            on evaluating the effectiveness of the flow of the site, the design was kept tailored to mobile phone view (iOS)
            to be implemented into other platforms in ongoing use.</p>
        <Button variant="contained" color="primary" a href="https://projects.invisionapp.com/share/EPCMF4WV5#/screens" target='_blank' rel="noopener noreferrer">View Case</Button> 
        </Col>
        </Row>    
        </ScrollAnimation>
        </Container>
        <img id='lake' className="img2 animated slideInUp" src={require('./images/uxui/mountains/mountain-mid.png')} /> 
        <ScrollAnimation animateIn="slideInUp">    
        <img id='lake' className='img1' src={require('./images/uxui/mountains/city-line.png')} />
        </ScrollAnimation>  
        </Parallax>
        <div id='section2'>
        <Container>
        <h1 align='center' style={{'color':'white'}}>Branding</h1>
        <div className='custom-hr'></div>
        <Row>
        <p>For the re-brand of the site, I decided to riff off of its original motifs. 
          As the proposed design focuses on UI that is less focused on the photography of places (reserved moreso for
          the items and components themselves), I decided to go with a more material-centered approach to the buttons 
          and visual guides of the app.</p>
        </Row> 
        <br></br>
        <ScrollAnimation animateIn="fadeIn">  
        <WfGallery />
        </ScrollAnimation>
        </Container>
        </div>
        <ScrollAnimation animateIn="fadeIn">  
        <Container>
        <h1 align='center'>So what now?</h1>
        <p>As I researched, designed and researched again, I was constantly surprised by what my participants expected. In traveling, 
        even people from a relatively narrow age group (say 19-30s for the target of my own) have varying experiences planning to go abroad or even a road trip. My current prototype is vastly different from how I imagined- since it simplified rather than try to fit every user's need. My goal to create resource for people looking to engage with a culture may not go as planned for users that do not engage with the site. However, I found that keeping the process quick and at their finger tips may be a good start in helping users rushing into something they're unfamiliar with. As a participant said, "not even a month is enough to immerse yourself in another country" but with ongoing communication with locals, users could potentially expand their experience in another 
        place online even after they've left; and that's exactly what I'll aim to do as I refine my research and UI design in the future.</p>
        </Container>
        </ScrollAnimation>
        </Layout>
        </div>
  );
};
export default WFCase; 