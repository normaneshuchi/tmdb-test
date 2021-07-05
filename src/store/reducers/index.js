import { combineReducers } from 'redux'
import  suggestionsReducer  from "./suggestionsReducer";
import  moviesReducer  from "./moviesReducer";

export default combineReducers({
  suggestions: suggestionsReducer,
  movies: moviesReducer
})