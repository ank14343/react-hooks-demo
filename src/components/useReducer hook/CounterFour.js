// for useReducer and useContext
import React, { useReducer } from 'react';
import CompA from './useReducer & useContext/CompA';
import CompC from './useReducer & useContext/CompC';
import CompB from './useReducer & useContext/CompB';

export const CountContext = React.createContext()

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
}

function CounterFour(props) {
    
    const [ count, dispatch ] = useReducer(reducer, initialState);

    return (
        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>    
            <div>
                Count : {count}
                <CompA />
                <CompB />
                <CompC />
            </div>
        </CountContext.Provider>
    );
}

export default CounterFour;