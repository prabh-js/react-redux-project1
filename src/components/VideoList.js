import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({videos, onVideoSelect}) => {
    const videoItem = videos.map((video) => {
        return <VideoListItem
                    video={video}
                    key={video.etag}
                    onVideoSelect={onVideoSelect}
                />
    })
    return (
        <ul className="col-md-4 list-group">
            {videoItem}
        </ul>
    )
}
export default VideoList;