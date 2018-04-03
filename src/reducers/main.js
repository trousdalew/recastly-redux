import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = combineReducers({
        currentVideo: currentVideo,
        videoList: videoList
});


export default rootReducer;
