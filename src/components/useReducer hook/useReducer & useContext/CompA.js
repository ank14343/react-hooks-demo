import React, { useContext } from 'react';
import { CountContext } from '../CounterFour';

function CompA(props) {
    const countContext = useContext(CountContext);
    return (
        <div>
            Comp A - {countContext.countState}

            <button onClick={() => countContext.countDispatch('reset')}>reset</button>
            <button onClick={() => countContext.countDispatch('increment')}>increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>decrement</button>
        </div>
    );
}

export default CompA;