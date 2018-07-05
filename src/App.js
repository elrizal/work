import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MenuExampleBasic from './components/Navigation/Navigation';
import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';

import { ParallaxProvider } from 'react-scroll-parallax';


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
// kkjlknlknkl        </p>
//       </div>
//     );
//   }
// }

// export default App;


const App = () => {
  return (
    <Router>
      <div>
      <ParallaxProvider>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={DynamicPage} />
          <Route component={NoMatch} />
        </Switch>
        </ParallaxProvider>

      </div>
    </Router>
  );
};

export default App;
