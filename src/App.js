import React, { Component } from 'react';
import Game from './Game';
import Dice from './Dice';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game/>
        <Dice face='four'/>
      </div>
    )
  }
}

export default App;
