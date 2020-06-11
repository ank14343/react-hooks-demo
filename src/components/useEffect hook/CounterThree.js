import React, { useState, useEffect } from 'react';

function CounterThree(props) {
    
    const [ x, setX ] = useState(0);
    const [ y, setY ] = useState(0);

    const logMousePosition = e => {
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect called..........");
        window.addEventListener("mousemove", logMousePosition);

        // for unmounting case cleaning up tasks here 
        return ()=> {
            console.log("unmount successfull")
            window.removeEventListener("mousemove", logMousePosition)
        }
    }, [])
    // passing empty array as 2nd argument telling react that this effect doesn't depends on any props and states so need to render again (renders 1 time only)

    return (
        <div>
            X - {x}, Y - {y}
        </div>
    );
}

export default CounterThree;