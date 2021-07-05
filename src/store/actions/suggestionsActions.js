import axios from "axios";
import { GET_SUGGESTIONS, SUGGESTIONS_ERROR } from "../types";

export const getSuggestions = (term) => async dispatch => {
    console.log(term)
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie/?query=${term}`);
        console.log(res.data.results)
        dispatch({
            type:GET_SUGGESTIONS,
            payload:res.data.results
        })
    } catch (error) {
        dispatch({
            type:SUGGESTIONS_ERROR,
            payload: console.log(error)
        })
    }
}