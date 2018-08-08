import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import './css/index.css';
import MenuExampleBasic from './components/Navigation/Navigation';
import Home from './Home';
import DynamicPage from './DynamicPage';
import DevPage from './DevPage';
import UXpage from './UXpage';
import BrandDesign from './BrandDesign';
import NoMatch from './NoMatch';
import Loading from './components/Loading';
import importedComponent from 'react-imported-component';
import Navigation from './components/Navigation/Navigation';
import ScrollAnimation from 'react-animate-on-scroll';

const AsyncDynamicPAge = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),('./DevPage'),('./UXpage'),
  {
    LoadingComponent: Loading
  }
);
const AsyncDynamicG = importedComponent(
  () => import('./DevPage'),
  {
    LoadingComponent: Loading
  }
);
const AsyncDynamicU = importedComponent(
  () => import('./UXpage'),
  {
    LoadingComponent: Loading
  }
);
const AsyncDynamicD = importedComponent(
  () => import('./BrandDesign'),
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Router>
      <div>
        <div id='block' style={{'height':'50px'}}></div>
      <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPAge} />
          <Route exact path="/dev" component={AsyncDynamicG} />
          <Route exact path="/uxui" component={AsyncDynamicU} />
          <Route exact path="/branddesign" component={AsyncDynamicD} />
          <Route component={AsyncNoMatch} />
          <Route exact path="/dynamic" component={DynamicPage} />
          <Route exact path="/dev" component={DevPage} />
          <Route exact path="/uxui" component={UXpage} />
          <Route exact path="/branddesign" component={BrandDesign} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
