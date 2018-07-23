import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import Layout from './Layout';
import './css/grid.css';
import Header from './components/Header/Header';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax, Background } from 'react-parallax';
import { Container} from 'semantic-ui-react';
import SingleLineGridList from './components/Recents/Recents'; 
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
        <Row id='section1' style={{'paddingBottom':'20px'}}>
        <Container>
        <h1>Hello!</h1>
        Thanks for checking this out. I'm a US-based full stack developer who has training in back end development
        paired with 3 years of work in front end development and visual design. I'm always more than
        eager to reach out to my skills in UX design and research, since I follow a passion for creating
        a full user experience. So here's what I use:
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
        </Container>
        </Row>
        </Parallax>
        <Row id='section2' style={{'padding':'10px'}}>
        <Container>
        <h1>Recent Work:</h1> 
        <ScrollAnimation animateIn="fadeInUp">
        <Row>
        <Col  xs={12} sm={12}  md={4} lg={4}>
        <h2>Cook with Nana</h2>
        <img className="animated fadeIn delay-50s" id='prev' alt='cook with nana' src={require('/Users/erinrizal/Documents/work/src/images/preview/cwn.jpg')} />
        </Col>
        <Col  xs={12} sm={12}  md={4} lg={4}>
        <h2>It's Lit</h2>
        <img className="animated fadeIn delay-50s" id='prev' alt='lit' src={require('/Users/erinrizal/Documents/work/src/images/preview/lit.jpg')} />
        </Col>
        <Col  xs={12} sm={12}  md={4} lg={4}>
        <h2>MoVr</h2>
        <img className="animated fadeIn delay-50s" id='prev' alt='movr' src={require('/Users/erinrizal/Documents/work/src/images/preview/movr.jpg')} />
        </Col>
        </Row>
        </ScrollAnimation>

        <Button variant="contained" color="primary" align='center'>
       MORE WORK SAMPLES ►
        </Button>
        </Container>
        </Row>
        {/* <Link to="/dynamic">Navigate to Dynamic Page</Link> */}
        </Layout>
        </div>
    );
};

export default Home;