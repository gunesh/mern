import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div>
            Hello Word
        </div>
    )
}
export default App