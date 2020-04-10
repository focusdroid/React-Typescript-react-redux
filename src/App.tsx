import React, { Component } from 'react';
import Hello from './component/Hello';
import Test from './component/Test'
import './App.css';

class App extends Component {
    state = {
        name: 'focusdroid'
    }
  render () {
      return (
          <div className="App">
              <Hello/>
              <Test temp={this.state.name}/>
          </div>
      );
  }
}

export default App;
