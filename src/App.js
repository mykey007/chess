import React, { Component } from 'react';
import Game from './Game';
import RollDice from './RollDice';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Game/> */}
        <RollDice/>
      </div>
    )
  }
}

export default App;
