import React from 'react';

const product = ( props )=> {
    return (
        <div>
            <p onClick={[props.click]}> The {props.name} cost {props.price} </p>
            <p>{props.children}</p>
        </div>
    )
}
export default product; 