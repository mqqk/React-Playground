import React, { Component } from 'react';
import './App.css';
import HelloWorld from './state-drills/Hello-World';
import Bomb from './state-drills/Bomb';
import Gun from './state-drills/Gun';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import Tabs from './state/Tabs';
import Accordion from './state-drills/Accordion';


const tabsProp=[
  {
      name:'First Tab',
      content:"I'm just going to make something up here."
  },
  {
      name:'Second Tab',
      content:"Here is something else to make up for Tab 2"
  },
  {
      name:'Third Tab',
      content:"I hope the weather cools off soon."
  }
]

const sectionsProp = [
  {
    title:'Section 1',
    content:'First Section has anything but Latin'
  },
  {
    title:'Section 2',
    content:'This wil all make perfect sense later'
  },
  {
    title:'Section 3',
    content:'Keep it rolling'
  }

]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Playground!</h1>
         
          <section className="Accordion">
            <h2>Accordion Assignment</h2>
            <Accordion sections={sectionsProp} />
          </section>
          <section className="Tabs">
            <h2>Tabs App</h2>
            <Tabs tabs={tabsProp} />
          </section>
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