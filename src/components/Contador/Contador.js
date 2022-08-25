import React from 'react';

export default (props) => {

    return (
        <div>
        <h1> {props.value}</h1>
        <button onClick={props.Increment} >Increment</button>
        <button onClick={props.Decrement} >Decrement</button>
        </div>
    )

}