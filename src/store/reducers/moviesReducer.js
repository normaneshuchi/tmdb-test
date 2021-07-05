import { GET_MOVIES, GET_SUGGESTIONS, UPDATE_STATUS } from "../types";

const initialState = {
    movies: [],
    loading: false,
    searchHandled: false
}

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false,
                searchHandled: true
            }
        case UPDATE_STATUS: 
            return {
                ...state,
                searchHandled: false
            }
        default: return state
    }

}