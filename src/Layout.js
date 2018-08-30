import React from 'react';
import { Container} from 'semantic-ui-react';
import { pullRight } from './css/Layout.css';
import { Row, Col} from 'react-bootstrap';
import './css/Layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <div id='block' style={{'height':'2vh'}}></div>  
      {children}
      <div id='block' style={{'height':'10vh'}}></div>  
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
export default Layout;