import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import './App.css';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={About} exact path='/about' />
          <Route component={Portfolio} exact path='/portfolio' />
          <Route component={Home} exact path='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
