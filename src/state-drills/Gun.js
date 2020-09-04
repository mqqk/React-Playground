import React from 'react';


export default class Gun extends React.Component{

    static defaultProps= {
        bulletInChamber:8
    };

    state = {
        chamber: null,
        spinningTheChamber: false,
    }

  
   


    triggerPull = () => {
        // console.log('trigger pulled')
        // console.log('triggerPull props',this.props);
        

        this.setState({
            spinningTheChamber:true,
        })
        // console.log(this.state.spinningTheChamber);//why doesn't this log as true?
       const randomNumber=Math.ceil(Math.random() * 8)
        // console.log(randomNumber);
        this.timeout = setTimeout(() => {
             this.setState ({
            chamber:randomNumber,
            spinningTheChamber:false,
        })}
            ,2000)

       
        // console.log(this.state.chamber);
        //console.log(this.state.spinningTheChamber);
    }

  renderResults(){
      const {chamber,spinningTheChamber} = this.state;
      const {bulletInChamber} = this.props;

    //   console.log('results chamber',chamber);
    //   console.log('results bullet',bulletInChamber);            

      if(spinningTheChamber){
          return 'spinning the chamber and pulling the trigger!...'
      }else if (chamber === bulletInChamber){
          return "BANG!"
      }else{
          return "You're Safe"
      }
  }



    render(){
        return(
            <div>
                <p>{this.renderResults()}</p>
                <button onClick = {this.triggerPull}>Pull the Trigger!</button>
            </div>
        )
    }

}