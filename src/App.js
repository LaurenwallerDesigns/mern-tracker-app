import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from './components/footer_index';
import FormLogin from './components/login_form.component';
import FormSignUp from './components/signup_form.component';
import UserProfile from './components/user_profile.component';
import Main from './components/home_index.component';

class App extends Component {
  render() {
    return (
      
      <Router>
        <nav className="navbar sticky-top navbar-light">
          <Link to="/" className="navbar-brand">Tracker</Link>
          <ul className="navbar-nav flex-row justify-content-end align-items-end">
            <li className="navbar-item px-2">
              <Link to="/login" className="nav-link">Log-In</Link>
            </li>
            <li className="navbar-item px-2">
              <Link to="/sign-up" className="nav-link">Sign-Up</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={FormLogin} />
        <Route path="/sign-up" component={FormSignUp} />
        <Route path="/user:id" component={UserProfile} />
      </Router>
      
    );
  }
}

export default App;
