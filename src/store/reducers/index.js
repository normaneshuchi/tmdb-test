import { combineReducers } from 'redux'
import  suggestionsReducer  from "./suggestionsReducer";

export default combineReducers({
  suggestions: suggestionsReducer
})