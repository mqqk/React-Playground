import React from 'react';
import { render } from 'react-dom';

class Counter extends React.Component{
    
    console.log('running HelloWorld');

    state = {
        who:"",
    };

    handleButtonClick=(props) => {
        console.log(props);
    //const newWho = this.state.who 
    }

    // constructor (props){
        // super(props)
        // this.state={
            // who:""
        // }
    // }

    render(){
        <div>
            <p>Hello, {who}</p>
            <button onClick={this.handleButtonClick('World')} id="World">World</button>
            <button id="Friend" onClick={this.handleButtonClick}>Friend</button>
            <button id="React" onClick={this.handleButtonClick}>React</button>
        </div>
    }
}



export default HelloWord;