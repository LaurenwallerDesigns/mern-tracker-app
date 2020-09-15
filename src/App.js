import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/header_index';
import Body from './components/body_index';
import Footer from './components/footer_index';
import FormLogin from './components/login_form.component';
import FormSignUp from './components/signup_form.component';
import UserProfile from './components/user_profile.component';
import Main from './components/home_index.component';

class App extends Component {
  render() {
    return (
      
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={FormLogin} />
        <Route path="/sign-up" component={FormSignUp} />
        <Route path="/user:id" component={UserProfile} />
      </Router>
      
    );
  }
}

export default App;
