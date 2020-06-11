import React from 'react';
import { UserContext, AnotherContext } from '../../App';

function ComponentF(props) {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                        <AnotherContext.Consumer>
                            {
                                another => {
                                    return <h2>UserContext value {user}, AnotherContext value {another}</h2>
                                }
                            }
                        </AnotherContext.Consumer>)
                    }
                }
            </UserContext.Consumer>
        </div>
    );
}

export default ComponentF;