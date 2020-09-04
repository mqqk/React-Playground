import React from 'react';
// import ReactDOM from 'react-dom';


export default class Tabs extends React.Component{

    static defaultProps = {
        tabs:[]
    };

    state = {
        currentTabIndex:0,
    }

    handleButtonClick = (index) => { //still not sure how to talk through this line of code
        console.log('button clicked',{index})
        this.setState({currentTabIndex:index})
        
    }
//i don't know how to read line 23
    renderButtons(){
        return this.props.tabs.map((tab,index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}> 
                {tab.name}
            </button>
        ))
    }

    renderContent(){
        const currentTab = this.props.tabs[this.state.currentTabIndex];//i don't understand how the state was absorb in to the array of tabs
        return(
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }
    
    render() {

        return(
            <div>
                {this.renderButtons()}
                {!!this.props.tabs.length && this.renderContent()}
            </div>
        )
    }
}