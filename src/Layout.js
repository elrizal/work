import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Divider } from 'semantic-ui-react';
import { pullRight, h1 } from './Layout.css';
import { Row, Col} from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <div>
      <Link to="/">
      </Link>
      {children}
      <Divider />
      <div className={pullRight} id='footer' align='center'>
      <Container>
      <Row>
      <Col  xs={12} sm={12}  md={6} lg={6} align='left'>
      <ul>Portfolio copyright © Erin Rizal 2018 </ul>
      </Col>
      <Col  xs={12} sm={12}  md={6} lg={6} >
      <a href='mailto:erin@lrizal.com'><i id='icons' className='fas fa-envelope fa-2x'></i>  </a> 
      <a href='https://www.linkedin.com/in/erin-leigh-rizal-3ab50767/' target='_blank' rel="noopener noreferrer">  <i id='icons' className='fab fa-linkedin fa-2x'></i> </a>    
      <a href='https://www.github.com/elrizal' target='_blank' rel="noopener noreferrer" > <i id='icons' className='fab fa-github  fa-2x'></i></a>
      </Col>
      </Row>    
      </ Container>        
      </div>
</div>
  );
};

export default Layout;