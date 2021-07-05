import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getSuggestions } from "../../store/actions/suggestionsActions";

class suggestions extends Component {

    render() {
        const {suggestions} = this.props.suggestions;
        console.log(suggestions);

        return (
            <div>
                {suggestions.map(s =>
                   <React.Fragment key = {s.id}>
                       <p>{s.original_title}</p>
                   </React.Fragment>
                )}
            </div>
        );
    }
}

const mapStateToProps  = (state) => ({suggestions:state.suggestions})

export default connect(mapStateToProps, {getSuggestions})(suggestions)