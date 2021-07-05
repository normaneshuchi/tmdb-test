import  Suggestions  from "./results";
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSuggestions } from "../../store/actions/suggestionsActions";


class searchbar extends Component {
    fetchSuggestions(e) {
        const term = e.target.value
        this.props.getSuggestions(term)
    }
    render() {
        return (
            <div>
                <form action="/" method="get">
                    <label htmlFor="header-search">
                        <span className="visually-hidden">Search</span>
                    </label>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search for movies"
                        name="s"
                        onChange={(e) => this.fetchSuggestions(e)}
                    />
                    <button type="submit">Search</button>
                </form>
                <div>
                 <Suggestions />
                </div>
            </div>);
    }
}

const mapStateToProps  = (state) => ({suggestions:state.suggestions})

export default connect(mapStateToProps, {getSuggestions})(searchbar)
