import React, { Component } from 'react';
import Game from './Game';
import Clicker from './Clicker';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game/>
        <Clicker/>
      </div>
    )
  }
}

export default App;
