import React, { useState, useEffect } from 'react';

function CounterOne(props) {
    
    const [ count, setCount ] = useState(0);

    // conditionally rendering
    const [ name, setName ] = useState("");

    useEffect(() => {
        console.log("log");
        document.title = `you clicked ${count} times`
    }, [count]);
    // if count doesn't change than no rendering useEffect statements
    
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    );
}

export default CounterOne;