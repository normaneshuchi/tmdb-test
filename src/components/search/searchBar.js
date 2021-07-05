import Suggestions from "./results";
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSuggestions, getMovies, hideSuggestions } from "../../store/actions/suggestionsActions";
class searchbar extends Component {



    fetchSuggestions(e) {
        const term = e.target.value
        this.props.hideSuggestion(true)
        this.props.getSuggestions(term)
    }

    hideSuggestion() {
        this.props.hideSuggestions();
    }

    fetchMovies(e) {
        e.preventDefault();
        this.hideSuggestion(false)
        const input = document.querySelector("#header-search");
        const term = input.value
        console.log(`: ${term}`);
        this.props.getMovies(term)
    }
    render() {
        const { visible } = this.props.suggestions;
        return (
            <div className="search">
                <form action="/" method="get">
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search for movies"
                        name="search"
                        onChange={(e) => this.fetchSuggestions(e)}
                    />
                    <button className="search-btn" onClick={(e) => this.fetchMovies(e)} type="submit">Search</button>
                </form>
                <div className="suggestions">
                    {visible ? (
                        <Suggestions />
                    ): (<div></div>)}
                </div>
            </div>);
    }
}

const mapStateToProps = (state) => ({ suggestions: state.suggestions, searchHandled: state.searchHandled })

export default connect(mapStateToProps, { getSuggestions, hideSuggestions, getMovies })(searchbar)
