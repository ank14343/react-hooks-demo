import React, { useContext } from 'react';
import ComponentF from './ComponentF';
import { UserContext, AnotherContext } from '../../App';

function ComponentE(props) {

    const user = useContext(UserContext)
    const another = useContext(AnotherContext)

    return (
        <div>
            {user} && {another}
            <ComponentF />
        </div>
    );
}

export default ComponentE;