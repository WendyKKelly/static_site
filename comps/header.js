import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Link from 'next/link';
import YTSearch from 'youtube-api-search';

import SearchBar from '../pages/searchbar';
import VideoList from '../pages/videolist';
import VideoDetail from '../pages/videodetail';

const API_KEY = 'AIzaSyA3ri90luC7rwLAzBp8sjwCTL3rdZVAK3I';


const linkStyle = {
  marginRight: 15
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {

      videos: [],
      selectedVideo: null
     };

this.videoSearch('surfboards');

}
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      //clean up: if key and variable are same -- instead of videos: videos
    });
    }


  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
  return (
    <div>
    <div>
    <SearchBar onSearchTermChange={videoSearch} />
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList
      onVideoSelect={selectedVideo => this.setState({selectedVideo})}
      videos={this.state.videos} />



  </div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
    </div>
);
}
}
export default Header
