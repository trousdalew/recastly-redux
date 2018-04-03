import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from '../containers/SearchContainer.js';
import VideoPlayer from '../containers/VideoPlayerContainer.js';
import VideoList from '../containers/VideoListContainer.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import store from '../store/store.js';
import handleSearch from '../actions/search.js';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.handleSearchInputChange('Octopus jar');
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer />
          </div>
          <div className="col-md-5">
            <VideoList />
          </div>
        </div>
      </div>
    );
  }
}

var mapDispatchToProps = (dispatch) => {
    return {
      handleSearchInputChange: (query) => dispatch(handleSearch(query))
    };
};

export default connect(null, mapDispatchToProps)(App);
