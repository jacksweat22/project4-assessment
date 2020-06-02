import React from 'react';


const CircleSelector = (props) =>{
return (
<div className='CircleSelector'>
        {props.circles.map((idx) => 
        <button className={props.selected ===idx ? selector :''} onClick={()=>  props.chosen(idx)}>
                {props.chosen !== idx  ? `Choose Circle ${idx}` : `Circle ${idx} Chosen`}
        </button >
        )}
</div>
 )
}

export default CircleSelector;