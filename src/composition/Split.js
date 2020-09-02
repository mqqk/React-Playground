import React from 'react'
import './Split.css';

console.log("split is running");

function Split(props) {
    const combinedClassName= `split ${props.className}`;
    const newStyles = {flex: props.dumbBasis};
    return (
        <div className={combinedClassName} style={newStyles}>
      {props.children}
    </div>
    );
  }

  export default Split;