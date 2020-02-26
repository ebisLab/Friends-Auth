import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Friends from './components/Friends'
import {Route, Switch, NavLink} from 'react-router-dom'

function App() {
  return (
    <div className="App">
                  <h1>E.B.'s Friends App</h1>

      <NavLink to="/login">Login</NavLink>
      <NavLink to="/protected">Protectd</NavLink>
      <Switch>
      <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/protected" component={Friends} />

      </Switch>
    </div>
  );
}

export default App;
