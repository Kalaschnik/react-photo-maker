import React, { Component } from 'react';
import './App.css';
import WebcamCapture from './Components/WebcamCapture';

/* const temp = async () => {
  await moveFile('C:\\Users\\Steven\\test.txt', 'C:\\Users\\Steven\\temp\\test.txt');
  console.log('The file has been moved');
}; */

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
            <span role="img" aria-labelledby="pizza slice">🍕</span>
          Pizzagame Network
          </h1>
          <h2>Avatar Creator</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum.
          </p>

          <WebcamCapture />
        </header>
      </div>
    );
  }
}
export default App;
