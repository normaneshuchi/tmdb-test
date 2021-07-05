import axios from "axios";
import { GET_MOVIES, GET_SUGGESTIONS, MOVIES_ERROR, SUGGESTIONS_ERROR, UPDATE_STATUS } from "../types";

export const getSuggestions = (term) => async dispatch => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie/?query=${term}`);
        let suggestions = res.data.results.slice(0,6)
        dispatch({
            type:GET_SUGGESTIONS,
            payload:suggestions
        });
        dispatch({
            type: UPDATE_STATUS,
            payload: true
        });
    } catch (error) {
        dispatch({
            type:SUGGESTIONS_ERROR,
            payload: console.log(error)
        })
    }
}
export const hideSuggestions = () => async dispatch => {
    dispatch({
        type:UPDATE_STATUS,
        payload: false
    })
}

export const getMovies = (term) => async dispatch => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie/?query=${term}`);
        let movies = res.data.results
        dispatch({
            type:GET_MOVIES,
            payload:movies
        });
    } catch (error) {
        dispatch({
            type:MOVIES_ERROR,
            payload: console.log(error)
        })
    }
}