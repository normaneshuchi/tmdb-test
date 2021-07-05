import { GET_SUGGESTIONS } from "../types";

const initialState = {
    suggestions: [],
    loading: false
}

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_SUGGESTIONS:
            return {
                ...state,
                suggestions: action.payload,
                loading: false
            }
        default: return state
    }

}