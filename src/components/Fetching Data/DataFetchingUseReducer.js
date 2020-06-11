import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'success':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'error':
            return {
                loading: false,
                error: 'Something is wrong',
                post: {}
            }
        default:
            return state
    }
}

function DataFetchingUseReducer(props) {
    
    const [ state, dispatch ] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => {
                dispatch({type: 'success', payload: response.data})
            })
            .catch(error => {
                dispatch({type: 'error'})
            })
    })

    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    );
}

export default DataFetchingUseReducer;