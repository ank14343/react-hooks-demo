import React, { useState, useReducer } from 'react';

const initialState = 0;
// here we have local state management what if we have global state management(share state b\w component) than check out CounterFour.js..using useReducer with useContext
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterThree(props) {
    
    // while dealing with multiple state variables that have same states transition than we can use same reducer function in multiple useReducer.........so that we don't have to write multiple code or merging states in reducer function (like we've seen in CounterTwo.js)
    const [ count, dispatch ] =  useReducer(reducer, initialState)
    const [ countTwo, dispatchTwo ] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count : {count}</div>

            <button onClick={() => dispatch('reset')}>reset</button>
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>

            <div>CountTwo : {countTwo}</div>

            <button onClick={() => dispatchTwo('reset')}>reset</button>
            <button onClick={() => dispatchTwo('increment')}>increment</button>
            <button onClick={() => dispatchTwo('decrement')}>decrement</button>
        </div>
    );
}

export default CounterThree;