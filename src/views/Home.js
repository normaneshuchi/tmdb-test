import React, { Component } from 'react';
import Searchbar  from "../components/search/searchBar";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="home">
                <h3>You are home</h3>
                <Searchbar/>
            </div>
         );
    }
}
 
export default HomePage;