import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Config } from "../../config";
class movies extends Component {

    render() {
        const { movies } = this.props.movies;
        console.log(movies);

        return (
            <div className="movies">

                {movies.map(s =>
                    <React.Fragment key={s.id}>
                        <div>
                            <img src={`${Config.img_path}${s.poster_path}`} alt={s.original_title} />
                            <h4>{s.original_title}</h4>
                            <p>{s.release_date}</p>
                        </div>
                    </React.Fragment>
                )}

            </div>
        );
    }
}

const mapStateToProps = (state) => ({ movies: state.movies })

export default connect(mapStateToProps, {})(movies)