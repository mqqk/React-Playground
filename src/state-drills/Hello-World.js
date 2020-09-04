import React from 'react';
// import { render } from 'react-dom';

class HelloWorld extends React.Component{
    
    

    state = {
        who:"",
    };
    


    render(){
        return(
        <div>
            <p>Hello,{this.state.who} </p>
            <button id="World" onClick={() => this.setState({who:' World'})}>World</button>
            <button id="Friend" onClick={() => this.setState({who:" Friend"})}>Friend</button>
            <button id="React" onClick={() => this.setState({who:' React'})}>React</button>
        </div>
        )
    }
}

   

export default HelloWorld;