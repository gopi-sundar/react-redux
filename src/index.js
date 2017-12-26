import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyClyqgSWPcYWyQNOdPhwio2N7uoRLEDKOg';

// Class Component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos:[],
            selectedVideo:null
        };
        
        YTSearch({key:API_KEY,term:'surfboards'},videoList => {
            this.setState({videos:videoList,selectedVideo:videoList[0]});            
        })
    }
    render(){
        return (
            <div>
                <SearchBar/>
                <VideoDetail                 
                video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
            </div>
        )    
    }
}

// Take this component's generated HTML and put it on the page (DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
