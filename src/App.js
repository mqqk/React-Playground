import React, { Component } from 'react';
import './App.css';
import HelloWorld from './state-drills/Hello-World';
import Bomb from './state-drills/Bomb';
import Gun from './state-drills/Gun';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Playground!</h1>
          <section className="Date">
            <h2>Date and Time</h2>
            <TheDate />
          </section>
          <section className="Counter">
            <h2>Counter App</h2>
            <Counter />

          </section>
          <section className="Hello">       
          <h2>Hello App</h2>
        
          <HelloWorld />
          </section>
          <section className="Bomb">
            <h2>The Bomb App</h2>
            <Bomb />
          </section>
          <section className="Gun">
            <h2>The Roulette Gun App</h2>
            <Gun />
          </section>
      </div>
      
    );
  }
}



export default App;