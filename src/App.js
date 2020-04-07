import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';

function App() {
  return (
    <div className='App'>
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
