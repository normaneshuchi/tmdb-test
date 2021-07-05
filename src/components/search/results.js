import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getSuggestions, getMovies, hideSuggestions } from "../../store/actions/suggestionsActions";

class suggestions extends Component {
    getMovies(title) {
        this.props.hideSuggestions(true)
        this.props.getMovies(title);
    }

    render() {
        const { suggestions } = this.props.suggestions;
        return (
            <div>
                {suggestions.map(s =>
                    <React.Fragment key={s.id}>
                        <p onClick={() => this.getMovies(s.original_title)}>{s.original_title}</p>
                    </React.Fragment>
                )}
            </div>
        );
    }
}


const mapStateToProps = (state) => ({ suggestions: state.suggestions })

export default connect(mapStateToProps, { getSuggestions, getMovies, hideSuggestions })(suggestions)