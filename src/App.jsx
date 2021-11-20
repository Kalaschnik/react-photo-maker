import React, { Component } from 'react';
import './App.css';
import WebcamCapture from './Components/WebcamCapture';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // camIsOn: false,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            🍕 Pizzagame & Cyberball ⚾
            <br />Network
          </h1>
          <h2>Avatar Creator</h2>
          <p>
Follow the 3 steps:
            <br />
          (1) Capture
          <br />
          (2) Crop
          <br />
          (3) Send

          </p>
          <WebcamCapture />
        </header>
      </div>
    );
  }
}
export default App;
