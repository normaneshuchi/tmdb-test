import { GET_SUGGESTIONS, UPDATE_STATUS } from "../types";

const initialState = {
    suggestions: [],
    loading: false,
    visible: true
}

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_SUGGESTIONS:
            return {
                ...state,
                suggestions: action.payload,
                loading: false
            }
        case UPDATE_STATUS: return { ...state, visible: action.payload}
        default: return state
    }

}