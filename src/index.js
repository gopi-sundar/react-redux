import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyClyqgSWPcYWyQNOdPhwio2N7uoRLEDKOg';



// Class Component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos:[]};
        
        YTSearch({key:API_KEY,term:'surfboards'},videoList => {
            this.setState({videos:videoList});
        })
    }
    render(){
        return (
            <div>
                <SearchBar/>
            </div>
        )    
    }
}

// Take this component's generated HTML and put it on the page (DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
