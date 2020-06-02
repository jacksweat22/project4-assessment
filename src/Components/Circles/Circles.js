import React from 'react';

const Circles = (props) => {
    return(
        <div className="Circles">
            { props.circles.map( (index) => 
            
            <div className = {props.selected === index ? 'chosen' : ''}
            onClick = { () =>  props.handleSelect (index) }>

            </div>
            ) }
        </div>
    )
}

export default Circles;