import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import Layout from '../Layout';
class App extends Component {

  constructor(props) {
      super(props); 
      this.state = {
      }
  }

  render() {
    return (
      <div>
        <Layout>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
