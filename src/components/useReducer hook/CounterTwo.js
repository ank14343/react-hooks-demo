import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo(props) {

    const [ count, dispatch ] =  useReducer(reducer, initialState)

    return (
        <div>
            <div>{count.firstCounter}</div>
            <div>{count.secondCounter}</div>

            <button onClick={() => dispatch({type: 'reset'})}>reset</button>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>increment5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>decrement5</button>

            <button onClick={() => dispatch({type: 'increment2', value: 1})}>increment counter2</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 1})}>decrement counter2</button>

            {/* <button onClick={() => setCount(0)}>reset</button>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => setCount(count - 1)}>decrement</button> */}

        </div>
    );
}

export default CounterTwo;