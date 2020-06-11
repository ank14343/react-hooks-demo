import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching(props) {
    // const [ posts, setPosts ] = useState([])
    const [ post, setPost ] = useState({})
    const [ id, setId ] = useState(1);
    const [ idFromBtnClick, setIdFromBtnClick ] = useState(1);

    const handleClick = () => {
        setIdFromBtnClick(id)
    }

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/" + idFromBtnClick)
            .then(response => {
                console.log(response)
                // setPosts(response.data)
                setPost(response.data)
            })
            .catch(error => console.log(error))
    }, [idFromBtnClick])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <li>{post.title}</li>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    );
}

export default DataFetching;