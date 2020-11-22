import React from 'react';
import VideoItems from './VideoItems';

const VideoList = ({videos , onVideoSelected }) => {
    let videoList = videos.map(video => {
        return <VideoItems key={video.id} video={video} onVideoSelected={onVideoSelected}/>;
    });
    return videoList;
};

export default VideoList;
