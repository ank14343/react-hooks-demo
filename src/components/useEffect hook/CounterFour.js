import React, { useState, useEffect } from 'react';

function CounterFour(props) {
    const [ count, setCount ] = useState(0)

    const tickTock = () => {
        // setCount(count + 1)
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        // we can define functions inside useEffect to quickly check if we have some prop info to look for so than we can add it in the dependency list

        console.log("useEffect")
        const timer = setInterval(tickTock, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [/** this is the dependency list to lookout for props and states changes */])

    return (
        <div>
            {count}
        </div>
    );
}

export default CounterFour;