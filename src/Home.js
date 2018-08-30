import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './css/grid.css';
import './css/zoom.css';
import Header from './components/Header/Header';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-parallax';
import { Container } from 'semantic-ui-react';
import { pullRight, h1 } from './css/Layout.css';

const Home = () => {
    return (
        <div>
        <Header />
        <Parallax
        className='animated FadeIn'
        id='parallax'
        bgImage={require('./images/wmarble.png')}
        strength={100}
        height={'auto'}>
        <Row id='section1'>
        <Container>
        <h1>Hello!</h1><p>
        Thanks for checking this out. I'm a US-based full stack developer who has training in back end development
        paired with 3 years of work in front end development and visual design. I'm always more than
        eager to reach out to my skills in UX design and research, since I follow a passion for creating
        a full user experience. So here's what I use:</p>
        <ScrollAnimation animateIn="fadeInUp">
        <Row>
        <Col xs={12} sm={12}  md={4} lg={4} >
        <h2><i  id='icons' className='fas fa-code fa-sm'></i>Development</h2>
        <p><strong>Client-Side:</strong> HTML, CSS, LESS, SASS, Java Script, React, Angular</p>
        <p><strong>Server-Side:</strong> Node, Express, MySQL, Sequelize, Mongo DB</p>
        </Col>
        <Col  xs={12} sm={12} md={4} lg={4}>
        <h2><i  id='icons' className='fas fa-object-ungroup fa-sm'></i>UX Design</h2>
        <p><strong>Protoyping and wireframing: </strong>Sketch, Adobe XD, Invision and Moqups<br></br>
        Research tools: Card sorting, survey analysis, persona creation</p>
        </Col>
        <Col  xs={12} sm={12}  md={4} lg={4}>
        <h2> <i  id='icons' className='fas fa-pen-nib fa-sm'></i>Visual design</h2>
        <p><strong>Adobe Creative Suite:</strong> Photoshop, Illustrator, After Effects, Animate, Lightroom, InDesign<br></br>
        Specialties: Brand identity, wireframing, illustration</p>
        </Col>
        </Row>
        </ScrollAnimation>
        <br></br>
        <ScrollAnimation animateIn="fadeInUp">
        <div>
        <h2>where I learned them:</h2> 
        <p><strong>Loyola University Maryland</strong> - <i>2011 to 2015</i> <br></br>
        B.A. in Digital Media and Psychology / 3 years of internships in web and graphic design</p>
      
       <p><strong>Springboard UX Design</strong> - <i>2016 to 2017</i> <br></br>
         Completed a full online course in the research, design strategies and practical applications behind creating strong user experiences
         </p> <p>
         <strong>Rutgers University Full Stack Development Course</strong> - <i>2017 to 2018</i> <br></br>
        Earned a certificate in front end and back end development</p>
        </div>
        </ScrollAnimation>
       <div align='right'>
       </div>
       <div id='block' style={{'height':'5vh'}}></div>  
       
        <h1>Work:</h1>
        </Container>
        </Row>
        <ScrollAnimation animateIn="fadeIn">
        <div align='center' id='introgridc'>
        <a className='introgrid' href="/uxui">
        <img className='introgrid' src={require('./images/items/ux.jpg')} alt='ux design'/> </a>
        <a className='introgrid' href="/branddesign">
        <img className='introgrid' src={require('./images/items/branding.jpg')} alt='brand design'/> </a>
        <a className='introgrid' href="/dev">
        <img className='introgrid' src={require('./images/items/web.jpg')} alt='web development'/></a>
        <a className='introgrid' href="/sm">
        <img className='introgrid' src={require('./images/items/social.jpg')} alt='social media'/> </a>
        <a className='introgrid' href="/illustration">
        <img className='introgrid' src={require('./images/items/illustration.jpg')} alt='illustrations' /> </a>
        <a className='introgrid' href="/posters">
        <img className='introgrid' src={require('./images/items/posters.jpg')} alt='posters' /> </a>
        <a className='introgrid' href="/broadcast">
        <img className='introgrid' src={require('./images/items/tv.jpg')} alt='broadcast'/> </a>
        <a className='introgrid' href="/print">
        <img className='introgrid' src={require('./images/items/print.jpg')} alt='print campaigns'/> </a>

        </div>  
        </ScrollAnimation>
        </Parallax>
        <div className={pullRight} id='footer' align='center'>
      <Container>
      <Row>    
      <Col  xs={12} sm={6}  md={6} lg={6}>
     © Erin Rizal 2018 
      </Col>
      <Col  xs={12} sm={6}  md={6} lg={6}>
      <a href='mailto:erin@lrizal.com'><i id='icons' className='fas fa-envelope fa-md'></i> Email </a> 
      <a href='https://www.linkedin.com/in/erin-leigh-rizal-3ab50767/' target='_blank' rel="noopener noreferrer">  <i id='icons' className='fab fa-linkedin fa-md'></i> LinkedIn</a>    
      <a href='https://www.github.com/elrizal' target='_blank' rel="noopener noreferrer" > <i id='icons' className='fab fa-github  fa-md'></i> Github</a>
      </Col>
      </Row>    
      </ Container> 
      </div>

        </div>
    );
};

export default Home;