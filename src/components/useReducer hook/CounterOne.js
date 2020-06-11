import React, { useState, useReducer } from 'react';

// useReducer performs state management same as useState
// useState is built on useReducer method

const initialState = 0;
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
    // return newState;
}

function CounterOne(props) {
    
    // const [ count , setCount ] = useState(0);
    const [ count, dispatch ] =  useReducer(reducer, initialState)

    return (
        <div>
            {count}

            <button onClick={() => dispatch('reset')}>reset</button>
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>

            {/* <button onClick={() => setCount(0)}>reset</button>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => setCount(count - 1)}>decrement</button> */}

        </div>
    );
}

export default CounterOne;