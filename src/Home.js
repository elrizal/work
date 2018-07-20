import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import Layout from './Layout';
import './css/grid.css';
import Header from './components/Header/Header';

const Home = () => {
    return (
        <div>
        <Header />
        <Layout>
           
            <p>Hello World of React and Webpack!</p>
            <p>
                <Link to="/dynamic">Navigate to Dynamic Page</Link>
            </p>
            <Grid className="container">
            <p></p>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <p>blah</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <p>blah</p>
                    </Col>
                </Row>
            </Grid>

        </Layout>
        </div>
    );
};

export default Home;