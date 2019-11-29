import React, { Component } from 'react';
import logo from './logo.svg';
import Sidebar from './components/sidebar';
import Contact from './components/contact';
import About from './components/about';
import Intro from './components/intro';
import Projects from './components/projects';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="App">
          <div className="App-main">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>My name is Polskii Mark!</h2>
            <Intro />            
            <About />            
            <Projects />
            <Contact />
          </div>        
        </div>
      </div>
    );
  }
}

export default App;
