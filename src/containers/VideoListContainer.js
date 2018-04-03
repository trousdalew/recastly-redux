import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import changeVideoList from './../actions/videoList.js';

var mapStateToProps = (state) => {
    return {
        video: state.currentVideo,
        videos: state.videoList
    }
}

var mapDispatchToProps = (dispatch) => {
    return {
        handleVideoListChange: (videos) => dispatch(changeVideoList(videos)),
        handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
    }
}

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
