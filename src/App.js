import React, { Component } from 'react';
import Game from './Game';
import Rando from './Rando';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game/>
        <Rando naxNum={7}/>
      </div>
    )
  }
}

export default App;
