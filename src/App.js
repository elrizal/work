import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import MenuExampleBasic from './components/Navigation/Navigation';
import Home from './Home';
import DynamicPage from './DynamicPage';
import DevPage from './DevPage';
import UXpage from './UXpage';
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
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
  {
    LoadingComponent: Loading
  }
);
// class App extends Component {
//   render() {
//     return (

//       <div className="App">
   
//         <header className="App-header">
// <MenuExampleBasic />
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//     </p>
//       </div>
//     );
//   }
// }
// export default App;

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
          <Route component={AsyncNoMatch} />
          <Route exact path="/dynamic" component={DynamicPage} />
          <Route exact path="/dev" component={DevPage} />
          <Route exact path="/uxui" component={UXpage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
