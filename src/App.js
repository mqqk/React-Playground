import React, { Component } from 'react';
import './App.css';
import HellowWorld from './state-drills/Hello-World';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <div>Hello!</div>
      </div>
      
    );
  }
}



export default App;