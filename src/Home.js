import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>

const ParallaxImage = () => (
    <Parallax
        className="custom-class"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
        <img src="https://images.unsplash.com/photo-1530625625693-b38b404cb1be?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38d936cb6e06e00bf06ccfc6751d5947&auto=format&fit=crop&w=668&q=80" />
    </Parallax>
);
      <p>Hello World of React and Webpack!</p>
      <p>
        <Link to="/dynamic">Navigate to Dynamic Page</Link>
      </p>
    </Layout>
  );
};

export default Home;