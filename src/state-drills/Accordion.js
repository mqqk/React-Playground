import React from 'react';

export default class Accordion extends React.Component{

    static defaultProps = {
        sections:[]
    };
    
     state = {
       currentSectionIndex:null,
    }

    renderList(currentSectionIndex){
        console.log('running renderList')
        console.log(this.props.sections);
        return <ul> {this.renderListButtons(currentSectionIndex)}</ul>
    }

    renderListButtons(currentSectionIndex){
        console.log('running ListButtons')
        return this.props.sections.map((section,index) => (
            <li key={index}>
                <button type='button' key={index} onClick={() => this.buttonClicks(index)}> {section.title} </button>
                {(currentSectionIndex===index) && <p>{section.content}</p>}
            </li>
        ))
        
    }

    buttonClicks(index){
        console.log('buttonClicks running');
        this.setState({currentSectionIndex:index})
        console.log(this.state.currentSectionIndex);
    }


    render() {
         const { currentSectionIndex } = this.state       

        return(
        <div>
            {this.renderList(currentSectionIndex)}
            
        </div>
        )
    }



}


// The accordion renders a <ul>, inside the ul will be a li element for each section. Each section's li should be a button containing the section's title.
// When a button is clicked, a p should be rendered below the button that was clicked (inside the li) that displays the section's content. You can use conditional rendering to display this p with the section content.
// When a button is clicked, only that section should be open and the other sections should be closed.
// You should write at least 4 snapshot tests for the Accordion component:
// The component renders an empty li when the sections prop is not supplied.
// The component renders no sections as active by default.
// The component opens a clicked section.
// The component only opens the last section when multiple sections have been clicked.
// As a stretch goal, add styles for the Accordion component in an Accordion.css file.