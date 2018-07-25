import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import Layout from './Layout';
import './css/grid.css';
import Header from './components/Header/Header';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax, Background } from 'react-parallax';
import { Container } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';

const Home = () => {
    return (
        <div>
        <Header />
        <Layout>
        <Parallax
        id='parallax'
        bgImage={require('/Users/erinrizal/Documents/work/src/images/tea.jpg')}
        strength={200}>
        <Row id='section1'>
        <Container>
        <h1>Hello!</h1>
        Thanks for checking this out. I'm a US-based full stack developer who has training in back end development
        paired with 3 years of work in front end development and visual design. I'm always more than
        eager to reach out to my skills in UX design and research, since I follow a passion for creating
        a full user experience. So here's what I use:
        <ScrollAnimation animateIn="fadeInUp">
        <Row>
        <Col  xs={12} sm={12}  md={4} lg={4} >
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

        <h2>where I learned them:</h2>
        <Row>
        <Col  xs={12} sm={12}  md={6} lg={6}>
        <strong>Loyola University Maryland</strong> - <i>2011 to 2015</i> <br></br>
        B.A. in Digital Media and Psychology / 3 years of internships in web and graphic design
        <br></br><br></br>
        <strong>Springboard UX Design</strong> - <i>2016 to 2017</i> <br></br>
        Completed a full online course in the research, design strategies and practical applications behind creating strong user experiences
        </Col>
        <Col  xs={12} sm={12}  md={6} lg={6}>
         <strong>Rutgers University Full Stack Development Course</strong> - <i>2017 to 2018</i> <br></br>
        Earned a certificate in front end and back end development
       </Col>
        </Row>
        <div id='block' style={{'height':'2vh'}}></div>

        </ScrollAnimation>
        </Container>
        </Row>
        </Parallax>
        <Row id='section2'>
        <Container>
            
        <h1>Recent Work: </h1> 
        <ScrollAnimation animateIn="fadeInUp">
        <Row>
        <Col  xs={12} sm={12}  md={4} lg={4}>
        <h2>Cook with Nana</h2>
        <img className="animated fadeIn delay-50s" id='prev' alt='cook with nana' src={require('/Users/erinrizal/Documents/work/src/images/preview/cwn.jpg')} />
        A social app designed for senior citizens and the culinary-challenged to meet each other for cooking.<br></br>
        </Col>

        <Col  xs={12} sm={12}  md={4} lg={4}>
        <h2>It's Lit</h2>
        <img className="animated fadeIn delay-50s" id='prev' alt='lit' src={require('/Users/erinrizal/Documents/work/src/images/preview/lit.jpg')} />
        Another social app created for literature-fanatics to exchange books while looking for a community of other book worms.<br></br>
        </Col>

        <Col  xs={12} sm={12}  md={4} lg={4}>
        <h2>MoVr</h2>
        <img className="animated fadeIn delay-50s" id='prev' alt='movr' src={require('/Users/erinrizal/Documents/work/src/images/preview/movr.jpg')} />
        A quiz-based app that matches tech-professionals with cities that suit their desired lifestyle.<br></br>
        </Col>
        </Row>        
        </ScrollAnimation>
        <div align='center'>
        <Link to="/gallery"><Button variant="contained" color="primary" style={{'height':'50px', 'margin':'10px'}}>
       MORE WORK SAMPLES ►
        </Button></Link></div>
        </Container>
        </Row>
        </Layout>
        </div>
    );
};

export default Home;