import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './css/index.css';
import Home from './Home';
import DynamicPage from './DynamicPage';
import DevPage from './DevPage';
import UXpage from './UXpage';
import WFCase from './WFCase';
import Print from './Print';
import SocialMedia from './SocialMedia';
import BrandDesign from './BrandDesign';
import NoMatch from './NoMatch';
import Loading from './components/Loading';
import importedComponent from 'react-imported-component';
import Navigation from './components/Navigation/Navigation';

const AsyncDynamicPage = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),('./DevPage'),('./UXpage'),
  ('./BrandDesign'),('./WFCase'), ('./SocialMedia'),('./Print'),('./Posters'),('./Illust'),('./Broadcast'),
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
const AsyncDynamicIll = importedComponent(
  () => import('./Illust'),
  {
    LoadingComponent: Loading
  }
);
const AsyncDynamicPosters = importedComponent(
  () => import('./Posters'),
  {
    LoadingComponent: Loading
  }
);
const AsyncDynamicBr = importedComponent(
  () => import('./Broadcast'),
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
const AsyncDynamicSm = importedComponent(
  () => import('./SocialMedia'),
  {
    LoadingComponent: Loading
  }
);
const AsyncDynamicPrint = importedComponent(
  () => import('./Print'),
  {
    LoadingComponent: Loading
  }
);
const AsyncDynamicWf = importedComponent(
  () => import('./WFCase'),
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
      <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPage} />
          <Route exact path="/dev" component={AsyncDynamicG} />
          <Route exact path="/uxui" component={AsyncDynamicU} />
          <Route exact path="/branddesign" component={AsyncDynamicD} />
          <Route exact path="/wherefor" component={AsyncDynamicWf} />
          <Route exact path="/broadcast" component={AsyncDynamicBr} />
          <Route exact path="/sm" component={AsyncDynamicSm} />
          <Route exact path="/print" component={AsyncDynamicPrint} />
          <Route exact path="/posters" component={AsyncDynamicPosters} />
          <Route exact path="/illustration" component={AsyncDynamicIll} />
          <Route component={AsyncNoMatch} />
          <Route exact path="/dynamic" component={DynamicPage} />
          <Route exact path="/dev" component={DevPage} />
          <Route exact path="/broadcast" component={DevPage} />
          <Route exact path="/uxui" component={UXpage} />
          <Route exact path="/wherefor" component={WFCase} />
          <Route exact path="/illustration" component={UXpage} />
          <Route exact path="/sm" component={SocialMedia} />
          <Route exact path="/print" component={Print} />
          <Route exact path="/branddesign" component={BrandDesign} />
          <Route exact path="/posters" component={DevPage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
