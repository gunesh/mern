import * as api from '../api'

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FTECH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
   
}