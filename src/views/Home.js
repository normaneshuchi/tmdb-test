import React, { Component } from 'react';
import Searchbar  from "../components/search/searchBar";
import Movies  from "../components/movies/results";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="home">
                <h3>Movie Search</h3>
                <h5>A simple search app. Type in your favorite movies and get all the information you need on it</h5>
                <Searchbar/>
                <Movies />
            </div>
         );
    }
}
 
export default HomePage;