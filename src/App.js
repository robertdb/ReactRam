import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { slide as Menu } from 'react-burger-menu';
import menu from './menu.png';



class App extends Component {

  constructor(props) {
      super(props); 
      this.state = {
          isOpen: false
      }
  }

  showSettings (event) {
    event.preventDefault();
  }

  changeMenu(){
    this.setState({isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div>
        <Menu isOpen={ this.state.isOpen } noOverlay disableOverlayClick>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a  className="menu-item" href="">Settings</a>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a  className="menu-item" href="">Settings</a>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a  className="menu-item" href="">Settings</a>
      </Menu>

        <div className="App">


          <div className="barrita">
            <img
              onClick={() => this.changeMenu() } 
              src={menu} width="48px"
            />
          </div>
        
          <header className="App-header">
       
            <img src={logo} className="App-logo" alt="logo" />
     
            <h1 className="App-title">Hola Ram</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      
      </div>

    
    );
  }
}

export default App;
