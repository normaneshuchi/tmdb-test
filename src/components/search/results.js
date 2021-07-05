import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getSuggestions, getMovies } from "../../store/actions/suggestionsActions";

class suggestions extends Component {
    getMovies(term) {
        console.log(term)
    }

    render() {
        const { suggestions } = this.props.suggestions;
        console.log(suggestions);


        return (
            <div>
                {suggestions.map(s =>
                    <React.Fragment key={s.id}>
                        <p onClick={getMovies(s.original_title)}>{s.original_title}</p>
                    </React.Fragment>
                )}
            </div>
        );
    }
}


const mapStateToProps = (state) => ({ suggestions: state.suggestions })

export default connect(mapStateToProps, { getSuggestions, getMovies })(suggestions)