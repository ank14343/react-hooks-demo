import React, { useState } from 'react';

function CounterThree(props) {
    
    const [name, setName] = useState({fName: "", lName: ""});
    // ...name spread operator to bind all states

    return (
        <form>
            <input type="text" value={name.fName} onChange={e => setName({...name, fName: e.target.value})} />
            <input type="text" value={name.lName} onChange={e => setName({...name, lName: e.target.value})} />
            <h2>Your fName is - {name.fName}</h2>
            <h2>Your lName is - {name.lName}</h2>
        </form>
    );
}

export default CounterThree;