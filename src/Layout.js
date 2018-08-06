import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Divider } from 'semantic-ui-react';
import { pullRight, h1 } from './Layout.css';
import { Row, Col} from 'react-bootstrap';
import './Layout.css';
const Layout = ({ children }) => {
  return (
    <div>
      <div style={{'height':'20px'}}></div>
      {children}
      <div style={{'height':'20px'}}></div>
      <Link to="/">
      </Link>
     
      <Divider />
      <div className={pullRight} id='footer' align='center'>
      <Container>
      <Row className='footer'>
      <Col  xs={12} sm={6}  md={6} lg={6} align='left'>
     © Erin Rizal 2018 
      </Col>
      <Col  xs={12} sm={6}  md={6} lg={6} align='right'>
      <a href='mailto:erin@lrizal.com'><i id='icons' className='fas fa-envelope fa-md'></i> Email </a> 
      <a href='https://www.linkedin.com/in/erin-leigh-rizal-3ab50767/' target='_blank' rel="noopener noreferrer">  <i id='icons' className='fab fa-linkedin fa-md'></i> LinkedIn</a>    
      <a href='https://www.github.com/elrizal' target='_blank' rel="noopener noreferrer" > <i id='icons' className='fab fa-github  fa-md'></i> Github</a>
      </Col>
      </Row>    
      </ Container> 
      <div id='block' style={{'height':'10%'}}></div>       
      </div>
</div>
  );
};

export default Layout;