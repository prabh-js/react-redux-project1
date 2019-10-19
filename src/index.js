import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyD0mGrlYlM3SXAO4V7yIcieo6FNeOUN9TA';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { videos: [], delectedVideo: null };
        this.videoSearch('surfboard');
    }
    videoSearch = (term) => {
        YTSearch({ key: API_KEY, term }, (videos)=> {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        })
    }
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <React.Fragment>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})} />
                
            </React.Fragment>
        )
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)