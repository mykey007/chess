import React, { Component } from 'react';
import Game from './Game';
import Button from './Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game/>
        <Button/>
      </div>
    )
  }
}

export default App;
