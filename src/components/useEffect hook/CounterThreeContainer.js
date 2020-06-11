import React, { useState } from 'react';
import CounterThree from './CounterThree';

function CounterThreeContainer(props) {
    const [ display, setDisplay ] = useState(true);
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            { display && <CounterThree /> }
        </div>
    );
}

export default CounterThreeContainer;