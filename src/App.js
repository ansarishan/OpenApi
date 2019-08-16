import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import WelcomePage from './views/WelcomePage/WelcomePage'
import Editor from './views/Editor/Editor'

function App() {
  return (
    <Router>
    <div>


      <Route path="/" exact component={WelcomePage} />
      <Route path="/editor/" component={Editor} />
    </div>
  </Router>
  );
}

export default App;
